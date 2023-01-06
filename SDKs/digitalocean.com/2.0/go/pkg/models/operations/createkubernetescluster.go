package operations

import (
	"openapi/pkg/models/shared"
)

type CreateKubernetesCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateKubernetesClusterRequest struct {
	Request shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput `request:"mediaType=application/json"`
}

type CreateKubernetesClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateKubernetesCluster201ApplicationJSONAny              *interface{}
	CreateKubernetesCluster401ApplicationJSONObject           *CreateKubernetesCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
