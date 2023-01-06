package operations

import (
	"openapi/pkg/models/shared"
)

type AccountArticleReportGenerateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AccountArticleReportGenerateRequest struct {
	Security AccountArticleReportGenerateSecurity
}

type AccountArticleReportGenerateResponse struct {
	AccountReport *shared.AccountReport
	ContentType   string
	StatusCode    int64
}
