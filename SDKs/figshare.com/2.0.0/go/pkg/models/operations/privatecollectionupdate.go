package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionUpdatePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionUpdateRequest struct {
	PathParams PrivateCollectionUpdatePathParams
	Request    shared.CollectionUpdate `request:"mediaType=application/json"`
	Security   PrivateCollectionUpdateSecurity
}

type PrivateCollectionUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
