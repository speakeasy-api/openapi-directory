package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleVersionConfidentialityPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	VNumber   int64 `pathParam:"style=simple,explode=false,name=v_number"`
}

type ArticleVersionConfidentialityRequest struct {
	PathParams ArticleVersionConfidentialityPathParams
}

type ArticleVersionConfidentialityResponse struct {
	ArticleConfidentiality *shared.ArticleConfidentiality
	ContentType            string
	StatusCode             int64
}
