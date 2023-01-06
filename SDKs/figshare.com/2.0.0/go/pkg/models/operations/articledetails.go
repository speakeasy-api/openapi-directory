package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type ArticleDetailsRequest struct {
	PathParams ArticleDetailsPathParams
}

type ArticleDetailsResponse struct {
	ArticleComplete *shared.ArticleComplete
	ContentType     string
	StatusCode      int64
}
