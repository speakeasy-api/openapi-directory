package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllVolumesQueryParams struct {
	Name    *string                                                                                                                                  `queryParam:"style=form,explode=true,name=name"`
	Page    *int64                                                                                                                                   `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                                                                                                                   `queryParam:"style=form,explode=true,name=per_page"`
	Region  *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `queryParam:"style=form,explode=true,name=region"`
}

// ListAllVolumes200ApplicationJSONVolumesRegion
// The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.
type ListAllVolumes200ApplicationJSONVolumesRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type ListAllVolumes200ApplicationJSONVolumes struct {
	FilesystemLabel *string                                        `json:"filesystem_label,omitempty"`
	FilesystemType  *string                                        `json:"filesystem_type,omitempty"`
	Region          *ListAllVolumes200ApplicationJSONVolumesRegion `json:"region,omitempty"`
}

type ListAllVolumes200ApplicationJSON struct {
	Volumes []ListAllVolumes200ApplicationJSONVolumes `json:"volumes"`
}

type ListAllVolumes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllVolumesRequest struct {
	QueryParams ListAllVolumesQueryParams
}

type ListAllVolumesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllVolumes200ApplicationJSONObject                    *ListAllVolumes200ApplicationJSON
	ListAllVolumes401ApplicationJSONObject                    *ListAllVolumes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
