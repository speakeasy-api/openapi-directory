package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletSnapshotsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletSnapshotsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletSnapshots200ApplicationJSON struct {
	Snapshots []shared.Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems `json:"snapshots,omitempty"`
}

type ListDropletSnapshots401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletSnapshotsRequest struct {
	PathParams  ListDropletSnapshotsPathParams
	QueryParams ListDropletSnapshotsQueryParams
}

type ListDropletSnapshotsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletSnapshots200ApplicationJSONObject              *ListDropletSnapshots200ApplicationJSON
	ListDropletSnapshots401ApplicationJSONObject              *ListDropletSnapshots401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
