package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabDocumentsPartialUpdateQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabDocumentsPartialUpdateRequest struct {
	PathParams  LabDocumentsPartialUpdatePathParams
	QueryParams LabDocumentsPartialUpdateQueryParams
	Security    LabDocumentsPartialUpdateSecurity
}

type LabDocumentsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
