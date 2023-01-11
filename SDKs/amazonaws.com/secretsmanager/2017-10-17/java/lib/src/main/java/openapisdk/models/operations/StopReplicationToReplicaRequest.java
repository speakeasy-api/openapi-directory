package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopReplicationToReplicaRequest {
    public StopReplicationToReplicaHeaders headers;
    public StopReplicationToReplicaRequest withHeaders(StopReplicationToReplicaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopReplicationToReplicaRequest request;
    public StopReplicationToReplicaRequest withRequest(openapisdk.models.shared.StopReplicationToReplicaRequest request) {
        this.request = request;
        return this;
    }
}