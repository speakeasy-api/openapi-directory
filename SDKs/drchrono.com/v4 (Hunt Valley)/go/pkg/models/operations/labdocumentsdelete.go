package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabDocumentsDeleteQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabDocumentsDeleteRequest struct {
	PathParams  LabDocumentsDeletePathParams
	QueryParams LabDocumentsDeleteQueryParams
	Security    LabDocumentsDeleteSecurity
}

type LabDocumentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
