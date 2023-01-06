package operations

import (
	"openapi/pkg/models/shared"
)

type ExportSubmissionsReviewsAsExcelPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type ExportSubmissionsReviewsAsExcelSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ExportSubmissionsReviewsAsExcelRequest struct {
	PathParams ExportSubmissionsReviewsAsExcelPathParams
	Security   ExportSubmissionsReviewsAsExcelSecurity
}

type ExportSubmissionsReviewsAsExcelResponse struct {
	Body                                                                                                       []byte
	ContentType                                                                                                string
	StatusCode                                                                                                 int64
	ExportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString []byte
}
