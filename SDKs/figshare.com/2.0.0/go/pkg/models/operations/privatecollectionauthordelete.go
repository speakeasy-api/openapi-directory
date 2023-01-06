package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionAuthorDeletePathParams struct {
	AuthorID     int64 `pathParam:"style=simple,explode=false,name=author_id"`
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionAuthorDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionAuthorDeleteRequest struct {
	PathParams PrivateCollectionAuthorDeletePathParams
	Security   PrivateCollectionAuthorDeleteSecurity
}

type PrivateCollectionAuthorDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
