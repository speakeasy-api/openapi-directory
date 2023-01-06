package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DocumentsDeleteQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type DocumentsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type DocumentsDeleteRequest struct {
	PathParams  DocumentsDeletePathParams
	QueryParams DocumentsDeleteQueryParams
	Security    DocumentsDeleteSecurity
}

type DocumentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
