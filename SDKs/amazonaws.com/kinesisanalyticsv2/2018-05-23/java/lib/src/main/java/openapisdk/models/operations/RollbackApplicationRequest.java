package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RollbackApplicationRequest {
    public RollbackApplicationHeaders headers;
    public RollbackApplicationRequest withHeaders(RollbackApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RollbackApplicationRequest request;
    public RollbackApplicationRequest withRequest(openapisdk.models.shared.RollbackApplicationRequest request) {
        this.request = request;
        return this;
    }
}