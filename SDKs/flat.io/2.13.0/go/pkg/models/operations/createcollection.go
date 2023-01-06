package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCollectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateCollectionRequest struct {
	Request  shared.CollectionCreation `request:"mediaType=application/json"`
	Security CreateCollectionSecurity
}

type CreateCollectionResponse struct {
	Collection        *shared.Collection
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
