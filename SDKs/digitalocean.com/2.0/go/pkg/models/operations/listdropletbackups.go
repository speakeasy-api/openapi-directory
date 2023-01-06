package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletBackupsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletBackupsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletBackups200ApplicationJSONBackups struct {
	ID int64 `json:"id"`
}

type ListDropletBackups200ApplicationJSON struct {
	Backups []ListDropletBackups200ApplicationJSONBackups `json:"backups,omitempty"`
}

type ListDropletBackups401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletBackupsRequest struct {
	PathParams  ListDropletBackupsPathParams
	QueryParams ListDropletBackupsQueryParams
}

type ListDropletBackupsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletBackups200ApplicationJSONObject                *ListDropletBackups200ApplicationJSON
	ListDropletBackups401ApplicationJSONObject                *ListDropletBackups401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
