package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDestroyWithAssociatedResourcesStatusPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

// GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet
// An object containing information about a resource scheduled for deletion.
type GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet struct {
	DestroyedAt  *time.Time `json:"destroyed_at,omitempty"`
	ErrorMessage *string    `json:"error_message,omitempty"`
	ID           *string    `json:"id,omitempty"`
	Name         *string    `json:"name,omitempty"`
}

// GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources
// An object containing additional information about resource related to a Droplet requested to be destroyed.
type GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources struct {
	Snapshots       []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"snapshots,omitempty"`
	VolumeSnapshots []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"volume_snapshots,omitempty"`
	Volumes         []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"volumes,omitempty"`
}

// GetDestroyWithAssociatedResourcesStatus200ApplicationJSON
// An objects containing information about a resources scheduled for deletion.
type GetDestroyWithAssociatedResourcesStatus200ApplicationJSON struct {
	CompletedAt *time.Time                                                          `json:"completed_at,omitempty"`
	Droplet     *GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet   `json:"droplet,omitempty"`
	Failures    *int64                                                              `json:"failures,omitempty"`
	Resources   *GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources `json:"resources,omitempty"`
}

type GetDestroyWithAssociatedResourcesStatus401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetDestroyWithAssociatedResourcesStatusRequest struct {
	PathParams GetDestroyWithAssociatedResourcesStatusPathParams
}

type GetDestroyWithAssociatedResourcesStatusResponse struct {
	ContentType                                                     string
	Headers                                                         map[string][]string
	StatusCode                                                      int64
	GetDestroyWithAssociatedResourcesStatus200ApplicationJSONObject *GetDestroyWithAssociatedResourcesStatus200ApplicationJSON
	GetDestroyWithAssociatedResourcesStatus401ApplicationJSONObject *GetDestroyWithAssociatedResourcesStatus401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema       *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
