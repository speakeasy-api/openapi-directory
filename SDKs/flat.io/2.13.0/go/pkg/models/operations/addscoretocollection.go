package operations

import (
	"openapi/pkg/models/shared"
)

type AddScoreToCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
	Score      string `pathParam:"style=simple,explode=false,name=score"`
}

type AddScoreToCollectionQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type AddScoreToCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddScoreToCollectionRequest struct {
	PathParams  AddScoreToCollectionPathParams
	QueryParams AddScoreToCollectionQueryParams
	Security    AddScoreToCollectionSecurity
}

type AddScoreToCollectionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      *shared.ScoreDetails
	StatusCode        int64
}
