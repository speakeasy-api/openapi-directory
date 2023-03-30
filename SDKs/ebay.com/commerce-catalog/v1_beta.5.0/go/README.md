# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/commerce-catalog/v1_beta.5.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetProductRequest{
        Security: operations.GetProductSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetProductPathParams{
            Epid: "unde",
        },
        Headers: operations.GetProductHeaders{
            XEbayCMarketplaceID: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Product.GetProduct(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Product

* `GetProduct` - This method retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. <br /><br /> For a new listing, you can use the <b>search</b> method to identify candidate products on which to base the listing, then use the <b>getProduct</b> method to present the full details of those candidate products to the seller to make a a final selection.

### ProductSummary

* `Search` - This method searches for and retrieves summaries of one or more products in the eBay catalog that match the search criteria provided by a seller. The seller can use the summaries to select the product in the eBay catalog that corresponds to the item that the seller wants to offer for sale. When a corresponding product is found and adopted by the seller, eBay will use the product information to populate the item listing. The criteria supported by <b>search</b> include keywords, product categories, and category aspects. To see the full details of a selected product, use the <b>getProduct</b> call. <br /><br /> In addition to product summaries, this method can also be used to identify <i>refinements</i>, which help you to better pinpoint the product you're looking for. A refinement consists of one or more <i>aspect</i> values and a count of the number of times that each value has been used in previous eBay listings. An aspect is a property (e.g. color or size) of an eBay category, used by sellers to provide details about the items they're listing. The <b>refinement</b> container is returned when you include the <b>fieldGroups</b> query parameter in the request with a value of <code>ASPECT_REFINEMENTS</code> or <code>FULL</code>. <br /><br /> <span style="padding: 15px 20px; display: block; border: 1px solid #cccccc"><b>Example</b> <br />A seller wants to find a product that is "gray" in color, but doesn't know what term the manufacturer uses for that color. It might be <code>Silver</code>, <code>Brushed Nickel</code>, <code>Pewter</code>, or even <code>Grey</code>. The returned <b>refinement</b> container identifies all aspects that have been used in past listings for products that match your search criteria, along with all of the values those aspects have taken, and the number of times each value was used. You can use this data to present the seller with a histogram of the values of each aspect. The seller can see which color values have been used in the past, and how frequently they have been used, and selects the most likely value or values for their product. You issue the <b>search</b> method again with those values in the <b>aspect_filter</b> parameter to narrow down the collection of products returned by the call.</span> <br /><br /> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value. If you provide more than one of these parameters, they will be combined with a logical AND to further refine the returned collection of matching products. <br /><br /> <span class="tablenote"><strong>Note:</strong> This method requires that certain special characters in the query parameters be percent-encoded: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;<code>(space)</code> = <code>%20</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>,</code> = <code>%2C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>:</code> = <code>%3A</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>[</code> = <code>%5B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>]</code> = <code>%5D</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>{</code> = <code>%7B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>|</code> = <code>%7C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>}</code> = <code>%7D</code> <br /><br /> This requirement applies to all query parameter values. However, for readability, method examples and samples in this documentation will not use the encoding.</span> <br /><br /> This method returns product summaries rather than the full details of the products. To retrieve the full details of a product, use the <b>getProduct</b> method with an ePID.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
