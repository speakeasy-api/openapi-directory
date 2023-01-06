package operations

import (
	"openapi/pkg/models/shared"
)

type EditCollectionPathParams struct {
	Collection string `pathParam:"style=simple,explode=false,name=collection"`
}

type EditCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type EditCollectionRequest struct {
	PathParams EditCollectionPathParams
	Request    *shared.CollectionModification `request:"mediaType=application/json"`
	Security   EditCollectionSecurity
}

type EditCollectionResponse struct {
	Collection        *shared.Collection
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
