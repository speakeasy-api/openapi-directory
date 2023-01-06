package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionPrivateLinksListPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionPrivateLinksListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionPrivateLinksListRequest struct {
	PathParams PrivateCollectionPrivateLinksListPathParams
	Security   PrivateCollectionPrivateLinksListSecurity
}

type PrivateCollectionPrivateLinksListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateLinks []shared.PrivateLink
	StatusCode   int64
}
