package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionVersionsPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionVersionsRequest struct {
	PathParams CollectionVersionsPathParams
}

type CollectionVersionsResponse struct {
	CollectionVersions []shared.CollectionVersions
	ContentType        string
	StatusCode         int64
}
