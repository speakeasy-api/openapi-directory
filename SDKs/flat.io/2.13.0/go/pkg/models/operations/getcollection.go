package operations

import (
	"openapi/pkg/models/shared"
)

type GetCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
}

type GetCollectionQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetCollectionRequest struct {
	PathParams  GetCollectionPathParams
	QueryParams GetCollectionQueryParams
	Security    GetCollectionSecurity
}

type GetCollectionResponse struct {
	Collection        *shared.Collection
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
