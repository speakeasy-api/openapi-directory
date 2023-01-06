package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleVersionDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	VNumber   int64 `pathParam:"style=simple,explode=false,name=v_number"`
}

type ArticleVersionDetailsRequest struct {
	PathParams ArticleVersionDetailsPathParams
}

type ArticleVersionDetailsResponse struct {
	ArticleComplete *shared.ArticleComplete
	ContentType     string
	StatusCode      int64
}
