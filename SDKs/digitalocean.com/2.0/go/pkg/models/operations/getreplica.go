package operations

import (
	"openapi/pkg/models/shared"
)

type GetReplicaPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	ReplicaName         string `pathParam:"style=simple,explode=false,name=replica_name"`
}

type GetReplica200ApplicationJSONOutput struct {
	Replica *shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput `json:"replica,omitempty"`
}

type GetReplica401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetReplicaRequest struct {
	PathParams GetReplicaPathParams
}

type GetReplicaResponseOutput struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetReplica200ApplicationJSONObject                        *GetReplica200ApplicationJSONOutput
	GetReplica401ApplicationJSONObject                        *GetReplica401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
