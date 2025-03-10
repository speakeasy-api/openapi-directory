// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

// AddTaskForSectionRequestBody - The task and optionally the insert location.
type AddTaskForSectionRequestBody struct {
	Data *shared.SectionTaskInsertRequest `json:"data,omitempty"`
}

type AddTaskForSectionRequest struct {
	// The task and optionally the insert location.
	RequestBody AddTaskForSectionRequestBody `request:"mediaType=application/json"`
	// Defines fields to return.
	// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
	// The id of included objects will always be returned, regardless of the field options.
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	// Provides “pretty” output.
	// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
	// The globally unique identifier for the section.
	SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
}

// AddTaskForSection200ApplicationJSON - Successfully added the task.
type AddTaskForSection200ApplicationJSON struct {
	// An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddTaskForSectionResponse struct {
	ContentType string
	// This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
	// Successfully added the task.
	AddTaskForSection200ApplicationJSONObject *AddTaskForSection200ApplicationJSON
}
