package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopAppReplicationRequest {
    public StopAppReplicationHeaders headers;
    public StopAppReplicationRequest withHeaders(StopAppReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopAppReplicationRequest request;
    public StopAppReplicationRequest withRequest(openapisdk.models.shared.StopAppReplicationRequest request) {
        this.request = request;
        return this;
    }
}