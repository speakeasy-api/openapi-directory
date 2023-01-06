package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionAuthorsReplacePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionAuthorsReplaceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionAuthorsReplaceRequest struct {
	PathParams PrivateCollectionAuthorsReplacePathParams
	Request    shared.AuthorsCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionAuthorsReplaceSecurity
}

type PrivateCollectionAuthorsReplaceResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
