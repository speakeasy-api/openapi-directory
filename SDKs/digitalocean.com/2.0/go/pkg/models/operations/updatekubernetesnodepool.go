package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateKubernetesNodePoolPathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=cluster_id"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
}

type UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum string

const (
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoSchedule       UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoSchedule"
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumPreferNoSchedule UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "PreferNoSchedule"
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoExecute        UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoExecute"
)

type UpdateKubernetesNodePoolRequestBodyTaints struct {
	Effect *UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum `json:"effect,omitempty"`
	Key    *string                                              `json:"key,omitempty"`
	Value  *string                                              `json:"value,omitempty"`
}

type UpdateKubernetesNodePoolRequestBodyInput struct {
	AutoScale *bool                                       `json:"auto_scale,omitempty"`
	Count     int64                                       `json:"count"`
	Labels    map[string]interface{}                      `json:"labels,omitempty"`
	MaxNodes  *int64                                      `json:"max_nodes,omitempty"`
	MinNodes  *int64                                      `json:"min_nodes,omitempty"`
	Name      string                                      `json:"name"`
	Tags      []string                                    `json:"tags,omitempty"`
	Taints    []UpdateKubernetesNodePoolRequestBodyTaints `json:"taints,omitempty"`
}

type UpdateKubernetesNodePool401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateKubernetesNodePoolRequest struct {
	PathParams UpdateKubernetesNodePoolPathParams
	Request    UpdateKubernetesNodePoolRequestBodyInput `request:"mediaType=application/json"`
}

type UpdateKubernetesNodePoolResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateKubernetesNodePool202ApplicationJSONAny             *interface{}
	UpdateKubernetesNodePool401ApplicationJSONObject          *UpdateKubernetesNodePool401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
