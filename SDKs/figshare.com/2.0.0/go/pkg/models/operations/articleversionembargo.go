package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleVersionEmbargoPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	VNumber   int64 `pathParam:"style=simple,explode=false,name=v_number"`
}

type ArticleVersionEmbargoRequest struct {
	PathParams ArticleVersionEmbargoPathParams
}

type ArticleVersionEmbargoResponse struct {
	ArticleEmbargo *shared.ArticleEmbargo
	ContentType    string
	StatusCode     int64
}
