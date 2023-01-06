package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionDeletePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionDeleteRequest struct {
	PathParams PrivateCollectionDeletePathParams
	Security   PrivateCollectionDeleteSecurity
}

type PrivateCollectionDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
