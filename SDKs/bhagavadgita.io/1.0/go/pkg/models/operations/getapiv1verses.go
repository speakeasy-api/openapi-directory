package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1VersesLanguageEnum string

const (
	GetAPIV1VersesLanguageEnumHi GetAPIV1VersesLanguageEnum = "hi"
)

type GetAPIV1VersesQueryParams struct {
	AccessToken string                      `queryParam:"style=form,explode=true,name=access_token"`
	Language    *GetAPIV1VersesLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type GetAPIV1VersesRequest struct {
	QueryParams GetAPIV1VersesQueryParams
}

type GetAPIV1VersesResponse struct {
	ContentType string
	StatusCode  int64
	VerseSchema *shared.VerseSchema
}
