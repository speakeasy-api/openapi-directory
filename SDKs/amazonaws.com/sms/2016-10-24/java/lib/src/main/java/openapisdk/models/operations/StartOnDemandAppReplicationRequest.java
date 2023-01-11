package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartOnDemandAppReplicationRequest {
    public StartOnDemandAppReplicationHeaders headers;
    public StartOnDemandAppReplicationRequest withHeaders(StartOnDemandAppReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartOnDemandAppReplicationRequest request;
    public StartOnDemandAppReplicationRequest withRequest(openapisdk.models.shared.StartOnDemandAppReplicationRequest request) {
        this.request = request;
        return this;
    }
}