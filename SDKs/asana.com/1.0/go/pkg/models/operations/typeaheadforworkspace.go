package operations

import (
	"openapi/pkg/models/shared"
)

type TypeaheadForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type TypeaheadForWorkspaceQueryParams struct {
	Count        *int64                       `queryParam:"style=form,explode=true,name=count"`
	OptFields    []string                     `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty    *bool                        `queryParam:"style=form,explode=true,name=opt_pretty"`
	Query        *string                      `queryParam:"style=form,explode=true,name=query"`
	ResourceType shared.WorkspacePathGidEnum  `queryParam:"style=form,explode=true,name=resource_type"`
	Type         *shared.WorkspacePathGidEnum `queryParam:"style=form,explode=true,name=type"`
}

// TypeaheadForWorkspace200ApplicationJSON
// A generic list of objects, such as those returned by the typeahead search endpoint.
type TypeaheadForWorkspace200ApplicationJSON struct {
	Data []shared.AsanaNamedResource `json:"data,omitempty"`
}

type TypeaheadForWorkspaceRequest struct {
	PathParams  TypeaheadForWorkspacePathParams
	QueryParams TypeaheadForWorkspaceQueryParams
}

type TypeaheadForWorkspaceResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	TypeaheadForWorkspace200ApplicationJSONObject *TypeaheadForWorkspace200ApplicationJSON
}
