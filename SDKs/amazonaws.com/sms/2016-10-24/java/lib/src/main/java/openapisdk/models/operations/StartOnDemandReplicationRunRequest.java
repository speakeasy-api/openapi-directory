package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartOnDemandReplicationRunRequest {
    public StartOnDemandReplicationRunHeaders headers;
    public StartOnDemandReplicationRunRequest withHeaders(StartOnDemandReplicationRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartOnDemandReplicationRunRequest request;
    public StartOnDemandReplicationRunRequest withRequest(openapisdk.models.shared.StartOnDemandReplicationRunRequest request) {
        this.request = request;
        return this;
    }
}