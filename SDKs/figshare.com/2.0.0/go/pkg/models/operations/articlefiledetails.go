package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleFileDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	FileID    int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type ArticleFileDetailsRequest struct {
	PathParams ArticleFileDetailsPathParams
}

type ArticleFileDetailsResponse struct {
	ContentType string
	PublicFile  *shared.PublicFile
	StatusCode  int64
}
