// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ChecksListForSuiteFilterEnum - Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
type ChecksListForSuiteFilterEnum string

const (
	ChecksListForSuiteFilterEnumLatest ChecksListForSuiteFilterEnum = "latest"
	ChecksListForSuiteFilterEnumAll    ChecksListForSuiteFilterEnum = "all"
)

func (e ChecksListForSuiteFilterEnum) ToPointer() *ChecksListForSuiteFilterEnum {
	return &e
}

func (e *ChecksListForSuiteFilterEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "latest":
		fallthrough
	case "all":
		*e = ChecksListForSuiteFilterEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ChecksListForSuiteFilterEnum: %v", v)
	}
}

type ChecksListForSuiteRequest struct {
	// Returns check runs with the specified `name`.
	CheckName *string `queryParam:"style=form,explode=true,name=check_name"`
	// check_suite_id parameter
	CheckSuiteID int64 `pathParam:"style=simple,explode=false,name=check_suite_id"`
	// Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
	Filter *ChecksListForSuiteFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Owner  string                        `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// Results per page (max 100)
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	Repo    string `pathParam:"style=simple,explode=false,name=repo"`
	// Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
	Status *shared.StatusEnum `queryParam:"style=form,explode=true,name=status"`
}

// ChecksListForSuite200ApplicationJSON - Response
type ChecksListForSuite200ApplicationJSON struct {
	CheckRuns  []shared.CheckRun `json:"check_runs"`
	TotalCount int64             `json:"total_count"`
}

type ChecksListForSuiteResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	ChecksListForSuite200ApplicationJSONObject *ChecksListForSuite200ApplicationJSON
}
