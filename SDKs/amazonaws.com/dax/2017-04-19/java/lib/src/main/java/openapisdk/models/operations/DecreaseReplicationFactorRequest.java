package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecreaseReplicationFactorRequest {
    public DecreaseReplicationFactorHeaders headers;
    public DecreaseReplicationFactorRequest withHeaders(DecreaseReplicationFactorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DecreaseReplicationFactorRequest request;
    public DecreaseReplicationFactorRequest withRequest(openapisdk.models.shared.DecreaseReplicationFactorRequest request) {
        this.request = request;
        return this;
    }
}