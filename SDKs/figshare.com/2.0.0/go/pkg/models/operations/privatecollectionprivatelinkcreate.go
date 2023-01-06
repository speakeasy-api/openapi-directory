package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionPrivateLinkCreatePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionPrivateLinkCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionPrivateLinkCreateRequest struct {
	PathParams PrivateCollectionPrivateLinkCreatePathParams
	Request    *shared.CollectionPrivateLinkCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionPrivateLinkCreateSecurity
}

type PrivateCollectionPrivateLinkCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
