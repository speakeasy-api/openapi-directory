package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1ChaptersChapterNumberVersesPathParams struct {
	ChapterNumber int64 `pathParam:"style=simple,explode=false,name=chapter_number"`
}

type GetAPIV1ChaptersChapterNumberVersesLanguageEnum string

const (
	GetAPIV1ChaptersChapterNumberVersesLanguageEnumHi GetAPIV1ChaptersChapterNumberVersesLanguageEnum = "hi"
)

type GetAPIV1ChaptersChapterNumberVersesQueryParams struct {
	AccessToken string                                           `queryParam:"style=form,explode=true,name=access_token"`
	Language    *GetAPIV1ChaptersChapterNumberVersesLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type GetAPIV1ChaptersChapterNumberVersesRequest struct {
	PathParams  GetAPIV1ChaptersChapterNumberVersesPathParams
	QueryParams GetAPIV1ChaptersChapterNumberVersesQueryParams
}

type GetAPIV1ChaptersChapterNumberVersesResponse struct {
	ContentType string
	StatusCode  int64
	VerseSchema *shared.VerseSchema
}
