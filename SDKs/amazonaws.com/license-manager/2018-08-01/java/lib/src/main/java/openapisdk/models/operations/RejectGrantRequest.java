package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectGrantRequest {
    public RejectGrantHeaders headers;
    public RejectGrantRequest withHeaders(RejectGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectGrantRequest request;
    public RejectGrantRequest withRequest(openapisdk.models.shared.RejectGrantRequest request) {
        this.request = request;
        return this;
    }
}