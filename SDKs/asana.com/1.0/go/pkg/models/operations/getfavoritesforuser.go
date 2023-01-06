package operations

import (
	"openapi/pkg/models/shared"
)

type GetFavoritesForUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetFavoritesForUserQueryParams struct {
	OptFields    []string          `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty    *bool             `queryParam:"style=form,explode=true,name=opt_pretty"`
	ResourceType shared.FieldsEnum `queryParam:"style=form,explode=true,name=resource_type"`
	Workspace    string            `queryParam:"style=form,explode=true,name=workspace"`
}

type GetFavoritesForUser200ApplicationJSON struct {
	Data []shared.AsanaNamedResource `json:"data,omitempty"`
}

type GetFavoritesForUserRequest struct {
	PathParams  GetFavoritesForUserPathParams
	QueryParams GetFavoritesForUserQueryParams
}

type GetFavoritesForUserResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	GetFavoritesForUser200ApplicationJSONObject *GetFavoritesForUser200ApplicationJSON
}
