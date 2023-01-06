package operations

import (
	"openapi/pkg/models/shared"
)

type PrescriptionMessagesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PrescriptionMessagesReadQueryParams struct {
	Doctor        *int64  `queryParam:"style=form,explode=true,name=doctor"`
	ParentMessage *int64  `queryParam:"style=form,explode=true,name=parent_message"`
	Patient       *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
}

type PrescriptionMessagesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PrescriptionMessagesReadRequest struct {
	PathParams  PrescriptionMessagesReadPathParams
	QueryParams PrescriptionMessagesReadQueryParams
	Security    PrescriptionMessagesReadSecurity
}

type PrescriptionMessagesReadResponse struct {
	ContentType         string
	PrescriptionMessage *shared.PrescriptionMessage
	StatusCode          int64
}
