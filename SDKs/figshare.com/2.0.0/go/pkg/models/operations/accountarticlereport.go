package operations

import (
	"openapi/pkg/models/shared"
)

type AccountArticleReportQueryParams struct {
	GroupID *int64 `queryParam:"style=form,explode=true,name=group_id"`
}

type AccountArticleReportSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AccountArticleReportRequest struct {
	QueryParams AccountArticleReportQueryParams
	Security    AccountArticleReportSecurity
}

type AccountArticleReportResponse struct {
	AccountReports []shared.AccountReport
	ContentType    string
	StatusCode     int64
}
