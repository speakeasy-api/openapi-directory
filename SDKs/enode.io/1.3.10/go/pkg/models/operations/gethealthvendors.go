package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthVendors200ApplicationJSONStatusEnum string

const (
	GetHealthVendors200ApplicationJSONStatusEnumReady             GetHealthVendors200ApplicationJSONStatusEnum = "READY"
	GetHealthVendors200ApplicationJSONStatusEnumElevatedErrorRate GetHealthVendors200ApplicationJSONStatusEnum = "ELEVATED_ERROR_RATE"
	GetHealthVendors200ApplicationJSONStatusEnumOutage            GetHealthVendors200ApplicationJSONStatusEnum = "OUTAGE"
)

// GetHealthVendors200ApplicationJSON
// Vendor status and metadata
type GetHealthVendors200ApplicationJSON struct {
	DisplayName *string                                                                   `json:"displayName,omitempty"`
	Status      *GetHealthVendors200ApplicationJSONStatusEnum                             `json:"status,omitempty"`
	Vendor      *shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum `json:"vendor,omitempty"`
}

type GetHealthVendorsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetHealthVendors200ApplicationJSONObjects []GetHealthVendors200ApplicationJSON
}
