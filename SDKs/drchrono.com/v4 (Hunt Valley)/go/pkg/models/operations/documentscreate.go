package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentsCreateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type DocumentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type DocumentsCreateRequest struct {
	QueryParams DocumentsCreateQueryParams
	Security    DocumentsCreateSecurity
}

type DocumentsCreateResponse struct {
	ContentType             string
	ScannedClinicalDocument *shared.ScannedClinicalDocument
	StatusCode              int64
}
