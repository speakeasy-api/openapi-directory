package shared

import (
	"time"
)

// Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet
// An object containing information about a resource scheduled for deletion.
type Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet struct {
	DestroyedAt  *time.Time `json:"destroyed_at,omitempty"`
	ErrorMessage *string    `json:"error_message,omitempty"`
	ID           *string    `json:"id,omitempty"`
	Name         *string    `json:"name,omitempty"`
}
