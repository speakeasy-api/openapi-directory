package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartAppReplicationRequest {
    public StartAppReplicationHeaders headers;
    public StartAppReplicationRequest withHeaders(StartAppReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartAppReplicationRequest request;
    public StartAppReplicationRequest withRequest(openapisdk.models.shared.StartAppReplicationRequest request) {
        this.request = request;
        return this;
    }
}