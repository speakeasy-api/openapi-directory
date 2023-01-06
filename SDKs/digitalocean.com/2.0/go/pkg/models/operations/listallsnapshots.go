package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllSnapshotsQueryParams struct {
	Page         *int64                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64                                       `queryParam:"style=form,explode=true,name=per_page"`
	ResourceType *shared.Onev21account1keysGetParameters1Enum `queryParam:"style=form,explode=true,name=resource_type"`
}

type ListAllSnapshots200ApplicationJSONSnapshots struct {
	ID string `json:"id"`
}

type ListAllSnapshots200ApplicationJSON struct {
	Snapshots []ListAllSnapshots200ApplicationJSONSnapshots `json:"snapshots,omitempty"`
}

type ListAllSnapshots401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllSnapshotsRequest struct {
	QueryParams ListAllSnapshotsQueryParams
}

type ListAllSnapshotsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllSnapshots200ApplicationJSONObject                  *ListAllSnapshots200ApplicationJSON
	ListAllSnapshots401ApplicationJSONObject                  *ListAllSnapshots401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
