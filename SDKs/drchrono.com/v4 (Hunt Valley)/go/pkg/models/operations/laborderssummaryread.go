package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersSummaryReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabOrdersSummaryReadQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersSummaryReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabOrdersSummaryReadRequest struct {
	PathParams  LabOrdersSummaryReadPathParams
	QueryParams LabOrdersSummaryReadQueryParams
	Security    LabOrdersSummaryReadSecurity
}

type LabOrdersSummaryReadResponse struct {
	ContentType string
	LabOrder    *shared.LabOrder
	StatusCode  int64
}
