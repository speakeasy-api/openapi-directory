package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesCreateQueryParams struct {
	Doctor          *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Owner           *int64  `queryParam:"style=form,explode=true,name=owner"`
	Patient         *int64  `queryParam:"style=form,explode=true,name=patient"`
	ReceivedSince   *string `queryParam:"style=form,explode=true,name=received_since"`
	ResponsibleUser *int64  `queryParam:"style=form,explode=true,name=responsible_user"`
	Type            *string `queryParam:"style=form,explode=true,name=type"`
	UpdatedSince    *string `queryParam:"style=form,explode=true,name=updated_since"`
}

type MessagesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MessagesCreateRequest struct {
	QueryParams MessagesCreateQueryParams
	Security    MessagesCreateSecurity
}

type MessagesCreateResponse struct {
	ContentType   string
	DoctorMessage *shared.DoctorMessage
	StatusCode    int64
}
