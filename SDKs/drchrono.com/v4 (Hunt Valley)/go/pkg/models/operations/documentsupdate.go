package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DocumentsUpdateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type DocumentsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type DocumentsUpdateRequest struct {
	PathParams  DocumentsUpdatePathParams
	QueryParams DocumentsUpdateQueryParams
	Security    DocumentsUpdateSecurity
}

type DocumentsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
