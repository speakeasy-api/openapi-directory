package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionsSearchRequest struct {
	Request *shared.CollectionSearch `request:"mediaType=application/json"`
}

type CollectionsSearchResponse struct {
	Collections []shared.Collection
	ContentType string
	StatusCode  int64
}
