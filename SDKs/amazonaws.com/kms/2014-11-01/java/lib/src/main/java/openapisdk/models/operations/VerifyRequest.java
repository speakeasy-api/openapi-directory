package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequest {
    public VerifyHeaders headers;
    public VerifyRequest withHeaders(VerifyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyRequest request;
    public VerifyRequest withRequest(openapisdk.models.shared.VerifyRequest request) {
        this.request = request;
        return this;
    }
}