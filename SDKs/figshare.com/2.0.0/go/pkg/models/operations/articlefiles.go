package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleFilesPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type ArticleFilesRequest struct {
	PathParams ArticleFilesPathParams
}

type ArticleFilesResponse struct {
	ContentType string
	PublicFiles []shared.PublicFile
	StatusCode  int64
}
