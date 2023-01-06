package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleVersionsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type ArticleVersionsRequest struct {
	PathParams ArticleVersionsPathParams
}

type ArticleVersionsResponse struct {
	ArticleVersions []shared.ArticleVersions
	ContentType     string
	StatusCode      int64
}
