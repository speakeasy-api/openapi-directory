package operations

import (
	"openapi/pkg/models/shared"
)

type ArticlesSearchRequest struct {
	Request *shared.ArticleSearch `request:"mediaType=application/json"`
}

type ArticlesSearchResponse struct {
	Articles    []shared.Article
	ContentType string
	StatusCode  int64
}
