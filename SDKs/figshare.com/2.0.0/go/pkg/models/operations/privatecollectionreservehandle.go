package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionReserveHandlePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionReserveHandleSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionReserveHandleRequest struct {
	PathParams PrivateCollectionReserveHandlePathParams
	Security   PrivateCollectionReserveHandleSecurity
}

type PrivateCollectionReserveHandleResponse struct {
	CollectionHandle *shared.CollectionHandle
	ContentType      string
	ErrorMessage     *shared.ErrorMessage
	StatusCode       int64
}
