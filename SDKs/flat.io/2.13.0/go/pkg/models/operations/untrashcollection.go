package operations

import (
	"openapi/pkg/models/shared"
)

type UntrashCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
}

type UntrashCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UntrashCollectionRequest struct {
	PathParams UntrashCollectionPathParams
	Security   UntrashCollectionSecurity
}

type UntrashCollectionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
