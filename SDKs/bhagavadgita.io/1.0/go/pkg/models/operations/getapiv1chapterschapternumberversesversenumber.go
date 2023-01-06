package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum string

const (
	GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnumOne   GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum = "1"
	GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnumTwo   GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum = "2"
	GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnumThree GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum = "3"
)

type GetAPIV1ChaptersChapterNumberVersesVerseNumberPathParams struct {
	ChapterNumber int64                                                         `pathParam:"style=simple,explode=false,name=chapter_number"`
	VerseNumber   GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum `pathParam:"style=simple,explode=false,name=verse_number"`
}

type GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnum string

const (
	GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnumHi GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnum = "hi"
)

type GetAPIV1ChaptersChapterNumberVersesVerseNumberQueryParams struct {
	AccessToken string                                                      `queryParam:"style=form,explode=true,name=access_token"`
	Language    *GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type GetAPIV1ChaptersChapterNumberVersesVerseNumberRequest struct {
	PathParams  GetAPIV1ChaptersChapterNumberVersesVerseNumberPathParams
	QueryParams GetAPIV1ChaptersChapterNumberVersesVerseNumberQueryParams
}

type GetAPIV1ChaptersChapterNumberVersesVerseNumberResponse struct {
	ContentType string
	StatusCode  int64
	VerseSchema *shared.VerseSchema
}
