package operations

import (
	"openapi/pkg/models/shared"
)

type ListCollectionScoresPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
}

type ListCollectionScoresDirectionEnum string

const (
	ListCollectionScoresDirectionEnumAsc  ListCollectionScoresDirectionEnum = "asc"
	ListCollectionScoresDirectionEnumDesc ListCollectionScoresDirectionEnum = "desc"
)

type ListCollectionScoresSortEnum string

const (
	ListCollectionScoresSortEnumCreationDate     ListCollectionScoresSortEnum = "creationDate"
	ListCollectionScoresSortEnumModificationDate ListCollectionScoresSortEnum = "modificationDate"
	ListCollectionScoresSortEnumTitle            ListCollectionScoresSortEnum = "title"
)

type ListCollectionScoresQueryParams struct {
	Direction  *ListCollectionScoresDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Limit      *int64                             `queryParam:"style=form,explode=true,name=limit"`
	Next       *string                            `queryParam:"style=form,explode=true,name=next"`
	Previous   *string                            `queryParam:"style=form,explode=true,name=previous"`
	SharingKey *string                            `queryParam:"style=form,explode=true,name=sharingKey"`
	Sort       *ListCollectionScoresSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type ListCollectionScoresSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListCollectionScoresRequest struct {
	PathParams  ListCollectionScoresPathParams
	QueryParams ListCollectionScoresQueryParams
	Security    ListCollectionScoresSecurity
}

type ListCollectionScoresResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      []shared.ScoreDetails
	StatusCode        int64
}
