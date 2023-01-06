package operations

import (
	"openapi/pkg/models/shared"
)

type GetFormByShareHashIncludeEnum string

const (
	GetFormByShareHashIncludeEnumShare GetFormByShareHashIncludeEnum = "share"
)

type GetFormByShareHashQueryParams struct {
	Include   *GetFormByShareHashIncludeEnum `queryParam:"style=form,explode=true,name=include"`
	ShareHash string                         `queryParam:"style=form,explode=true,name=shareHash"`
}

type GetFormByShareHashHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetFormByShareHashRequest struct {
	QueryParams GetFormByShareHashQueryParams
	Headers     GetFormByShareHashHeaders
}

type GetFormByShareHashResponse struct {
	ContentType  string
	FormResponse *shared.FormResponse
	StatusCode   int64
}
