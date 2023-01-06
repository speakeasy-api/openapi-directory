package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MessagesUpdateQueryParams struct {
	Doctor          *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Owner           *int64  `queryParam:"style=form,explode=true,name=owner"`
	Patient         *int64  `queryParam:"style=form,explode=true,name=patient"`
	ReceivedSince   *string `queryParam:"style=form,explode=true,name=received_since"`
	ResponsibleUser *int64  `queryParam:"style=form,explode=true,name=responsible_user"`
	Type            *string `queryParam:"style=form,explode=true,name=type"`
	UpdatedSince    *string `queryParam:"style=form,explode=true,name=updated_since"`
}

type MessagesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MessagesUpdateRequest struct {
	PathParams  MessagesUpdatePathParams
	QueryParams MessagesUpdateQueryParams
	Security    MessagesUpdateSecurity
}

type MessagesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
