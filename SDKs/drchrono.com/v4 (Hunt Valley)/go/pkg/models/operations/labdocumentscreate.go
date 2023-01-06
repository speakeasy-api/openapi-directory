package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsCreateQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabDocumentsCreateRequest struct {
	QueryParams LabDocumentsCreateQueryParams
	Security    LabDocumentsCreateSecurity
}

type LabDocumentsCreateResponse struct {
	ContentType      string
	LabOrderDocument *shared.LabOrderDocument
	StatusCode       int64
}
