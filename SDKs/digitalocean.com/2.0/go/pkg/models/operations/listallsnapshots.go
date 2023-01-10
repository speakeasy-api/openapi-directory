package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAllSnapshotsQueryParams struct {
	Page         *int64                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64                                       `queryParam:"style=form,explode=true,name=per_page"`
	ResourceType *shared.Onev21account1keysGetParameters1Enum `queryParam:"style=form,explode=true,name=resource_type"`
}

type ListAllSnapshots200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllSnapshots200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllSnapshots200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

// ListAllSnapshots200ApplicationJSONMeta
// Information about the response itself.
type ListAllSnapshots200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum string

const (
	ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnumDroplet ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = "droplet"
	ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnumVolume  ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = "volume"
)

type ListAllSnapshots200ApplicationJSONSnapshots struct {
	CreatedAt     time.Time                                                   `json:"created_at"`
	ID            string                                                      `json:"id"`
	MinDiskSize   int64                                                       `json:"min_disk_size"`
	Name          string                                                      `json:"name"`
	Regions       []string                                                    `json:"regions"`
	ResourceID    string                                                      `json:"resource_id"`
	ResourceType  ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum `json:"resource_type"`
	SizeGigabytes float32                                                     `json:"size_gigabytes"`
	Tags          []string                                                    `json:"tags"`
}

type ListAllSnapshots200ApplicationJSON struct {
	Links     *ListAllSnapshots200ApplicationJSONLinks      `json:"links,omitempty"`
	Meta      ListAllSnapshots200ApplicationJSONMeta        `json:"meta"`
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
