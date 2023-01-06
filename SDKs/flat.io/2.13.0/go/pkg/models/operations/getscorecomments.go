package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreCommentsPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreCommentsDirectionEnum string

const (
	GetScoreCommentsDirectionEnumAsc  GetScoreCommentsDirectionEnum = "asc"
	GetScoreCommentsDirectionEnumDesc GetScoreCommentsDirectionEnum = "desc"
)

type GetScoreCommentsSortEnum string

const (
	GetScoreCommentsSortEnumDate GetScoreCommentsSortEnum = "date"
)

type GetScoreCommentsTypeEnum string

const (
	GetScoreCommentsTypeEnumDocument GetScoreCommentsTypeEnum = "document"
	GetScoreCommentsTypeEnumInline   GetScoreCommentsTypeEnum = "inline"
)

type GetScoreCommentsQueryParams struct {
	Direction  *GetScoreCommentsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	SharingKey *string                        `queryParam:"style=form,explode=true,name=sharingKey"`
	Sort       *GetScoreCommentsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
	Type       *GetScoreCommentsTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type GetScoreCommentsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreCommentsRequest struct {
	PathParams  GetScoreCommentsPathParams
	QueryParams GetScoreCommentsQueryParams
	Security    GetScoreCommentsSecurity
}

type GetScoreCommentsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreComments     []shared.ScoreComment
	StatusCode        int64
}
