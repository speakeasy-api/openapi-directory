package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DocumentsReadQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type DocumentsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type DocumentsReadRequest struct {
	PathParams  DocumentsReadPathParams
	QueryParams DocumentsReadQueryParams
	Security    DocumentsReadSecurity
}

type DocumentsReadResponse struct {
	ContentType             string
	ScannedClinicalDocument *shared.ScannedClinicalDocument
	StatusCode              int64
}
