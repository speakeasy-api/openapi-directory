package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScoreFromCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
	Score      string `pathParam:"style=simple,explode=false,name=score"`
}

type DeleteScoreFromCollectionQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type DeleteScoreFromCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteScoreFromCollectionRequest struct {
	PathParams  DeleteScoreFromCollectionPathParams
	QueryParams DeleteScoreFromCollectionQueryParams
	Security    DeleteScoreFromCollectionSecurity
}

type DeleteScoreFromCollectionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
