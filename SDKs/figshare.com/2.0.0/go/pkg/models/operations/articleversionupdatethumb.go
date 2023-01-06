package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleVersionUpdateThumbPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	VersionID int64 `pathParam:"style=simple,explode=false,name=version_id"`
}

type ArticleVersionUpdateThumbSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ArticleVersionUpdateThumbRequest struct {
	PathParams ArticleVersionUpdateThumbPathParams
	Request    shared.FileID `request:"mediaType=application/json"`
	Security   ArticleVersionUpdateThumbSecurity
}

type ArticleVersionUpdateThumbResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
