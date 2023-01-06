package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionDetailsPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionDetailsRequest struct {
	PathParams PrivateCollectionDetailsPathParams
	Security   PrivateCollectionDetailsSecurity
}

type PrivateCollectionDetailsResponse struct {
	CollectionComplete *shared.CollectionComplete
	ContentType        string
	StatusCode         int64
}
