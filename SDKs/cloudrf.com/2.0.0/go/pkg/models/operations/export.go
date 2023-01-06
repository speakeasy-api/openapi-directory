package operations

import (
	"openapi/pkg/models/shared"
)

type ExportFmtEnum string

const (
	ExportFmtEnumKml    ExportFmtEnum = "kml"
	ExportFmtEnumKmzppa ExportFmtEnum = "kmzppa"
	ExportFmtEnumShp    ExportFmtEnum = "shp"
	ExportFmtEnumTiff   ExportFmtEnum = "tiff"
)

type ExportQueryParams struct {
	File string        `queryParam:"style=form,explode=true,name=file"`
	Fmt  ExportFmtEnum `queryParam:"style=form,explode=true,name=fmt"`
}

type ExportSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ExportRequest struct {
	QueryParams ExportQueryParams
	Security    ExportSecurity
}

type ExportResponse struct {
	ContentType string
	StatusCode  int64
}
