package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncreaseReplicationFactorRequest {
    public IncreaseReplicationFactorHeaders headers;
    public IncreaseReplicationFactorRequest withHeaders(IncreaseReplicationFactorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncreaseReplicationFactorRequest request;
    public IncreaseReplicationFactorRequest withRequest(openapisdk.models.shared.IncreaseReplicationFactorRequest request) {
        this.request = request;
        return this;
    }
}