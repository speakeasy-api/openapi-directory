package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
}

type DeleteCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteCollectionRequest struct {
	PathParams DeleteCollectionPathParams
	Security   DeleteCollectionSecurity
}

type DeleteCollectionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
