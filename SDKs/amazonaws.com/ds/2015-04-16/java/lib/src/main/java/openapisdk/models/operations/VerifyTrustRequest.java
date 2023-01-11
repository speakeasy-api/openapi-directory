package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyTrustRequest {
    public VerifyTrustHeaders headers;
    public VerifyTrustRequest withHeaders(VerifyTrustHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyTrustRequest request;
    public VerifyTrustRequest withRequest(openapisdk.models.shared.VerifyTrustRequest request) {
        this.request = request;
        return this;
    }
}