package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MessagesPartialUpdateQueryParams struct {
	Doctor          *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Owner           *int64  `queryParam:"style=form,explode=true,name=owner"`
	Patient         *int64  `queryParam:"style=form,explode=true,name=patient"`
	ReceivedSince   *string `queryParam:"style=form,explode=true,name=received_since"`
	ResponsibleUser *int64  `queryParam:"style=form,explode=true,name=responsible_user"`
	Type            *string `queryParam:"style=form,explode=true,name=type"`
	UpdatedSince    *string `queryParam:"style=form,explode=true,name=updated_since"`
}

type MessagesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MessagesPartialUpdateRequest struct {
	PathParams  MessagesPartialUpdatePathParams
	QueryParams MessagesPartialUpdateQueryParams
	Security    MessagesPartialUpdateSecurity
}

type MessagesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
