package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionVersionDetailsPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
	VersionID    int64 `pathParam:"style=simple,explode=false,name=version_id"`
}

type CollectionVersionDetailsRequest struct {
	PathParams CollectionVersionDetailsPathParams
}

type CollectionVersionDetailsResponse struct {
	CollectionComplete *shared.CollectionComplete
	ContentType        string
	StatusCode         int64
}
