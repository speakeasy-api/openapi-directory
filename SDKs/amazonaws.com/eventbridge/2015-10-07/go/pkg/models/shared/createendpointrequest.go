// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CreateEndpointRequest struct {
	Description       *string            `json:"Description,omitempty"`
	EventBuses        []EndpointEventBus `json:"EventBuses"`
	Name              string             `json:"Name"`
	ReplicationConfig *ReplicationConfig `json:"ReplicationConfig,omitempty"`
	RoleArn           *string            `json:"RoleArn,omitempty"`
	RoutingConfig     RoutingConfig      `json:"RoutingConfig"`
}
