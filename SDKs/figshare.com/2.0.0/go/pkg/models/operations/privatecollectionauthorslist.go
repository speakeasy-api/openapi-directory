package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionAuthorsListPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionAuthorsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionAuthorsListRequest struct {
	PathParams PrivateCollectionAuthorsListPathParams
	Security   PrivateCollectionAuthorsListSecurity
}

type PrivateCollectionAuthorsListResponse struct {
	Authors      []shared.Author
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
