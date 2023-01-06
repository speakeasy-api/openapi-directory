package shared

import (
	"time"
)

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput1Output struct {
	Connection         map[string]interface{}                                                                                                                              `json:"connection,omitempty"`
	CreatedAt          *time.Time                                                                                                                                          `json:"created_at,omitempty"`
	Name               string                                                                                                                                              `json:"name"`
	PrivateConnection  *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection `json:"private_connection,omitempty"`
	PrivateNetworkUUID *string                                                                                                                                             `json:"private_network_uuid,omitempty"`
	Region             *string                                                                                                                                             `json:"region,omitempty"`
	Status             *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum        `json:"status,omitempty"`
	Tags               []string                                                                                                                                            `json:"tags,omitempty"`
}
