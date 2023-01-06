package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type ProductSummary struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProductSummary(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ProductSummary {
	return &ProductSummary{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// Search - This call searches for and retrieves summaries of one or more products in the eBay catalog that match the search criteria provided by a seller. The seller can use the summaries to select the product in the eBay catalog that corresponds to the item that the seller wants to offer for sale. When a corresponding product is found and adopted by the seller, eBay will use the product information to populate the item listing. The criteria supported by search include keywords, product categories, and category aspects. To see the full details of a selected product, use the getProduct call. In addition to product summaries, this call can also be used to identify refinements, which help you to better pinpoint the product you're looking for. A refinement consists of one or more aspect values and a count of the number of times that each value has been used in previous eBay listings. An aspect is a property (e.g. color or size) of an eBay category, used by sellers to provide details about the items they're listing. The refinement container is returned when you include the fieldGroups query parameter in the request with a value of ASPECT_REFINEMENTS or FULL. Example A seller wants to find a product that is &quot;gray&quot; in color, but doesn't know what term the manufacturer uses for that color. It might be Silver, Brushed Nickel, Pewter, or even Grey. The returned refinement container identifies all aspects that have been used in past listings for products that match your search criteria, along with all of the values those aspects have taken, and the number of times each value was used. You can use this data to present the seller with a histogram of the values of each aspect. The seller can see which color values have been used in the past, and how frequently they have been used, and selects the most likely value or values for their product. You issue the search call again with those values in the aspect_filter parameter to narrow down the collection of products returned by the call. Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. If you provide more than one of these parameters, they will be combined with a logical AND to further refine the returned collection of matching products. Note: This call requires that certain special characters in the query parameters be percent-encoded: &nbsp;&nbsp;&nbsp;&nbsp;(space) = %20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, = %2C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: = %3A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ = %5B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] = %5D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ = %7B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = %7C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} = %7D This requirement applies to all query parameter values. However, for readability, call examples and samples in this documentation will not use the encoding. This call returns product summaries rather than the full details of the products. To retrieve the full details of a product, use the getProduct call with an ePID.
func (s *ProductSummary) Search(ctx context.Context, request operations.SearchRequest) (*operations.SearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/product_summary/search"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProductSearchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductSearchResponse = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
