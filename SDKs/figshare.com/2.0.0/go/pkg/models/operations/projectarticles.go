package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectArticlesPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectArticlesRequest struct {
	PathParams ProjectArticlesPathParams
}

type ProjectArticlesResponse struct {
	Articles    []shared.Article
	ContentType string
	StatusCode  int64
}
