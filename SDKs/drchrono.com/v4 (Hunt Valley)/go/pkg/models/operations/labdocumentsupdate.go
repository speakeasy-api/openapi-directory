package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabDocumentsUpdateQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabDocumentsUpdateRequest struct {
	PathParams  LabDocumentsUpdatePathParams
	QueryParams LabDocumentsUpdateQueryParams
	Security    LabDocumentsUpdateSecurity
}

type LabDocumentsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
