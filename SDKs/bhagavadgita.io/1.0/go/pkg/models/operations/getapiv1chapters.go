package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1ChaptersLanguageEnum string

const (
	GetAPIV1ChaptersLanguageEnumHi GetAPIV1ChaptersLanguageEnum = "hi"
)

type GetAPIV1ChaptersQueryParams struct {
	AccessToken string                        `queryParam:"style=form,explode=true,name=access_token"`
	Language    *GetAPIV1ChaptersLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type GetAPIV1ChaptersRequest struct {
	QueryParams GetAPIV1ChaptersQueryParams
}

type GetAPIV1ChaptersResponse struct {
	ChapterSchema *shared.ChapterSchema
	ContentType   string
	StatusCode    int64
}
