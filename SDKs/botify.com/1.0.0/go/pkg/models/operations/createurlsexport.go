package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUrlsExportPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type CreateUrlsExportAreaEnum string

const (
	CreateUrlsExportAreaEnumCurrent              CreateUrlsExportAreaEnum = "current"
	CreateUrlsExportAreaEnumDisappeared          CreateUrlsExportAreaEnum = "disappeared"
	CreateUrlsExportAreaEnumNew                  CreateUrlsExportAreaEnum = "new"
	CreateUrlsExportAreaEnumSearchEnginesOrphans CreateUrlsExportAreaEnum = "search_engines_orphans"
)

type CreateUrlsExportQueryParams struct {
	Area *CreateUrlsExportAreaEnum `queryParam:"style=form,explode=true,name=area"`
}

type CreateUrlsExportRequest struct {
	PathParams  CreateUrlsExportPathParams
	QueryParams CreateUrlsExportQueryParams
	Request     *shared.UrlsQuery `request:"mediaType=application/json"`
}

type CreateUrlsExportResponse struct {
	ContentType     string
	CsvExportStatus *shared.CsvExportStatus
	DefaultPayload  *shared.DefaultPayload
	StatusCode      int64
}
