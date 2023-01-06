package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicaPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type CreateReplicaRequestBodyInput struct {
	Name               string   `json:"name"`
	PrivateNetworkUUID *string  `json:"private_network_uuid,omitempty"`
	Region             *string  `json:"region,omitempty"`
	Size               *string  `json:"size,omitempty"`
	Tags               []string `json:"tags,omitempty"`
}

type CreateReplica201ApplicationJSONOutput struct {
	Replica *shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput `json:"replica,omitempty"`
}

type CreateReplica401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateReplicaRequest struct {
	PathParams CreateReplicaPathParams
	Request    *CreateReplicaRequestBodyInput `request:"mediaType=application/json"`
}

type CreateReplicaResponseOutput struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateReplica201ApplicationJSONObject                     *CreateReplica201ApplicationJSONOutput
	CreateReplica401ApplicationJSONObject                     *CreateReplica401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
