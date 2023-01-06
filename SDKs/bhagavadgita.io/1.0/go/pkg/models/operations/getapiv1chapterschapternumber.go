package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1ChaptersChapterNumberPathParams struct {
	ChapterNumber int64 `pathParam:"style=simple,explode=false,name=chapter_number"`
}

type GetAPIV1ChaptersChapterNumberLanguageEnum string

const (
	GetAPIV1ChaptersChapterNumberLanguageEnumHi GetAPIV1ChaptersChapterNumberLanguageEnum = "hi"
)

type GetAPIV1ChaptersChapterNumberQueryParams struct {
	AccessToken string                                     `queryParam:"style=form,explode=true,name=access_token"`
	Language    *GetAPIV1ChaptersChapterNumberLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type GetAPIV1ChaptersChapterNumberRequest struct {
	PathParams  GetAPIV1ChaptersChapterNumberPathParams
	QueryParams GetAPIV1ChaptersChapterNumberQueryParams
}

type GetAPIV1ChaptersChapterNumberResponse struct {
	ChapterSchema *shared.ChapterSchema
	ContentType   string
	StatusCode    int64
}
