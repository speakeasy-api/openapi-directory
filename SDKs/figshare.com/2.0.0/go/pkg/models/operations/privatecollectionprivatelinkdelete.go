package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionPrivateLinkDeletePathParams struct {
	CollectionID int64  `pathParam:"style=simple,explode=false,name=collection_id"`
	LinkID       string `pathParam:"style=simple,explode=false,name=link_id"`
}

type PrivateCollectionPrivateLinkDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionPrivateLinkDeleteRequest struct {
	PathParams PrivateCollectionPrivateLinkDeletePathParams
	Security   PrivateCollectionPrivateLinkDeleteSecurity
}

type PrivateCollectionPrivateLinkDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
