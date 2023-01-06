package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionPrivateLinkUpdatePathParams struct {
	CollectionID int64  `pathParam:"style=simple,explode=false,name=collection_id"`
	LinkID       string `pathParam:"style=simple,explode=false,name=link_id"`
}

type PrivateCollectionPrivateLinkUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionPrivateLinkUpdateRequest struct {
	PathParams PrivateCollectionPrivateLinkUpdatePathParams
	Request    *shared.CollectionPrivateLinkCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionPrivateLinkUpdateSecurity
}

type PrivateCollectionPrivateLinkUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
