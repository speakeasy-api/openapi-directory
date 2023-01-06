package operations

import (
	"openapi/pkg/models/shared"
)

type TestURLRewritingRulesPathParams struct {
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type TestURLRewritingRulesRequest struct {
	PathParams TestURLRewritingRulesPathParams
}

type TestURLRewritingRulesResponse struct {
	ContentType                 string
	DefaultPayload              *shared.DefaultPayload
	StatusCode                  int64
	URLRewritingRulesSerializer *shared.URLRewritingRulesSerializer
}
