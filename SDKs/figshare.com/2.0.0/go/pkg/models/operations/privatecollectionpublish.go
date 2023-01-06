package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionPublishPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionPublishSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionPublishRequest struct {
	PathParams PrivateCollectionPublishPathParams
	Security   PrivateCollectionPublishSecurity
}

type PrivateCollectionPublishResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
