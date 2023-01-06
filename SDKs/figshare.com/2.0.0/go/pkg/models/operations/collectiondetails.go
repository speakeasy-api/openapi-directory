package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionDetailsPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionDetailsRequest struct {
	PathParams CollectionDetailsPathParams
}

type CollectionDetailsResponse struct {
	CollectionComplete *shared.CollectionComplete
	ContentType        string
	StatusCode         int64
}
