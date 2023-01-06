package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionArticlesPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionArticlesQueryParams struct {
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type CollectionArticlesRequest struct {
	PathParams  CollectionArticlesPathParams
	QueryParams CollectionArticlesQueryParams
}

type CollectionArticlesResponse struct {
	Articles    []shared.Article
	ContentType string
	StatusCode  int64
}
