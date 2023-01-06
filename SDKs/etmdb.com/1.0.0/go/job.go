package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Job struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewJob(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Job {
	return &Job{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// JobSearchRead - Return job details search result
// Return job details search result
//
// ### Response Class (Status 200)
//
// * __{job_title}__: Used as a key word to search jobs,
//
// For more details on how job are listed [see here][ref].
// [ref]: https://etmdb.com/en/job-list/-updated_date
func (s *Job) JobSearchRead(ctx context.Context, request operations.JobSearchReadRequest) (*operations.JobSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/job/search/{job_title}", request.PathParams)

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

	res := &operations.JobSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// JobSearchallRead - Return job details search result
// Return job details search result
//
// ### Response Class (Status 200)
//
// * __{company_name}__: Used as a key word to search jobs,
//
// For more details on how job are listed [see here][ref].
// [ref]: https://etmdb.com/en/job-list/-updated_date
func (s *Job) JobSearchallRead(ctx context.Context, request operations.JobSearchallReadRequest) (*operations.JobSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/job/searchall/{company_name}", request.PathParams)

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

	res := &operations.JobSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
