package operations

import (
	"openapi/pkg/models/shared"
)

type ExportSubmissionsReviewsAsCsvPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type ExportSubmissionsReviewsAsCsvSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ExportSubmissionsReviewsAsCsvRequest struct {
	PathParams ExportSubmissionsReviewsAsCsvPathParams
	Security   ExportSubmissionsReviewsAsCsvSecurity
}

type ExportSubmissionsReviewsAsCsvResponse struct {
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
	ExportSubmissionsReviewsAsCsv200TextCsvBinaryString []byte
}
