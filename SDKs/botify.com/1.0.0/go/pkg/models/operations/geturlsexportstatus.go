package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsExportStatusPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	URLExportID  string `pathParam:"style=simple,explode=false,name=url_export_id"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsExportStatusRequest struct {
	PathParams GetUrlsExportStatusPathParams
}

type GetUrlsExportStatusResponse struct {
	ContentType     string
	CsvExportStatus *shared.CsvExportStatus
	DefaultPayload  *shared.DefaultPayload
	StatusCode      int64
}
