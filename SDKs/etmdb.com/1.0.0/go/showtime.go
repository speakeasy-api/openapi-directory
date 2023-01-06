package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Showtime struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewShowtime(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Showtime {
	return &Showtime{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ShowtimeSearchallRead - Return showtime search result
// Return showtime search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * show time or
// * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
//
// For more details about showtime, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *Showtime) ShowtimeSearchallRead(ctx context.Context, request operations.ShowtimeSearchallReadRequest) (*operations.ShowtimeSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/showtime/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ShowtimeSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
