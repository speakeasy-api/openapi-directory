package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Events struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEvents(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Events {
	return &Events{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetV3Events - Get metadata for multiple events
// This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
// videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with
// an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content
// produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image)
// will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as
// "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
//
// You'll need an API key and access token to use this resource.
func (s *Events) GetV3Events(ctx context.Context, request operations.GetV3EventsRequest) (*operations.GetV3EventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3EventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3EventsID - Get metadata for a single event
// This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment
// photographers and videographers cover editorially relevant events occurring around the world.
// All images or video clips produced in association with an event, are assigned the same EventID.
// EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images
// brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be
// consistently assigned an EventID. The Event framework may also be used to group similar content, such as
// "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
//
// You'll need an API key and access token to use this resource.
func (s *Events) GetV3EventsID(ctx context.Context, request operations.GetV3EventsIDRequest) (*operations.GetV3EventsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/events/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3EventsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
