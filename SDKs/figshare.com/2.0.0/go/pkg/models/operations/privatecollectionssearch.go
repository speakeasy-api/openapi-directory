package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionsSearchSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionsSearchRequest struct {
	Request  shared.PrivateCollectionSearch `request:"mediaType=application/json"`
	Security PrivateCollectionsSearchSecurity
}

type PrivateCollectionsSearchResponse struct {
	Collections  []shared.Collection
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
