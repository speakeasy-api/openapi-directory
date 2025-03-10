// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

type GetTimePeriodsRequest struct {
	// ISO 8601 date string
	EndOn *types.Date `queryParam:"style=form,explode=true,name=end_on"`
	// Results per page.
	// The number of objects to return per page. The value must be between 1 and 100.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// Offset token.
	// An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
	// 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
	// Defines fields to return.
	// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
	// The id of included objects will always be returned, regardless of the field options.
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	// Provides “pretty” output.
	// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
	// ISO 8601 date string
	StartOn *types.Date `queryParam:"style=form,explode=true,name=start_on"`
	// Globally unique identifier for the workspace.
	Workspace string `queryParam:"style=form,explode=true,name=workspace"`
}

// GetTimePeriods200ApplicationJSON - Successfully retrieved the requested time periods.
type GetTimePeriods200ApplicationJSON struct {
	Data []shared.TimePeriodCompact `json:"data,omitempty"`
}

type GetTimePeriodsResponse struct {
	ContentType string
	// This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
	// Successfully retrieved the requested time periods.
	GetTimePeriods200ApplicationJSONObject *GetTimePeriods200ApplicationJSON
}
