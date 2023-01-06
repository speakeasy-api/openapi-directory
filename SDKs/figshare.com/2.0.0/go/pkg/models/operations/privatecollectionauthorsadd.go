package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionAuthorsAddPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionAuthorsAddSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionAuthorsAddRequest struct {
	PathParams PrivateCollectionAuthorsAddPathParams
	Request    shared.AuthorsCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionAuthorsAddSecurity
}

type PrivateCollectionAuthorsAddResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
