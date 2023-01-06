package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesListQueryParams struct {
	Cursor          *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor          *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Owner           *int64  `queryParam:"style=form,explode=true,name=owner"`
	PageSize        *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient         *int64  `queryParam:"style=form,explode=true,name=patient"`
	ReceivedSince   *string `queryParam:"style=form,explode=true,name=received_since"`
	ResponsibleUser *int64  `queryParam:"style=form,explode=true,name=responsible_user"`
	Type            *string `queryParam:"style=form,explode=true,name=type"`
	UpdatedSince    *string `queryParam:"style=form,explode=true,name=updated_since"`
}

type MessagesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// MessagesList200ApplicationJSON
// Paginated Result
type MessagesList200ApplicationJSON struct {
	Data     []shared.DoctorMessage `json:"data,omitempty"`
	Next     *string                `json:"next,omitempty"`
	Previous *string                `json:"previous,omitempty"`
}

type MessagesListRequest struct {
	QueryParams MessagesListQueryParams
	Security    MessagesListSecurity
}

type MessagesListResponse struct {
	ContentType                          string
	StatusCode                           int64
	MessagesList200ApplicationJSONObject *MessagesList200ApplicationJSON
}
