package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionReserveDoiPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionReserveDoiSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionReserveDoiRequest struct {
	PathParams PrivateCollectionReserveDoiPathParams
	Security   PrivateCollectionReserveDoiSecurity
}

type PrivateCollectionReserveDoiResponse struct {
	CollectionDOI *shared.CollectionDoi
	ContentType   string
	ErrorMessage  *shared.ErrorMessage
	StatusCode    int64
}
