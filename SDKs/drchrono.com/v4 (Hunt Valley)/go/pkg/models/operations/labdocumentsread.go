package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabDocumentsReadQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabDocumentsReadRequest struct {
	PathParams  LabDocumentsReadPathParams
	QueryParams LabDocumentsReadQueryParams
	Security    LabDocumentsReadSecurity
}

type LabDocumentsReadResponse struct {
	ContentType      string
	LabOrderDocument *shared.LabOrderDocument
	StatusCode       int64
}
