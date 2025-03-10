// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetUrlsExportStatusRequest struct {
	// Analysis' identifier
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	// Project's identifier
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	// Url Export ID
	URLExportID string `pathParam:"style=simple,explode=false,name=url_export_id"`
	// User's identifier
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsExportStatusResponse struct {
	ContentType string
	// Successful operation
	CsvExportStatus *shared.CsvExportStatus
	// error payload
	DefaultPayload *shared.DefaultPayload
	StatusCode     int
	RawResponse    *http.Response
}
