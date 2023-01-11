package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetireGrantRequest {
    public RetireGrantHeaders headers;
    public RetireGrantRequest withHeaders(RetireGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetireGrantRequest request;
    public RetireGrantRequest withRequest(openapisdk.models.shared.RetireGrantRequest request) {
        this.request = request;
        return this;
    }
}