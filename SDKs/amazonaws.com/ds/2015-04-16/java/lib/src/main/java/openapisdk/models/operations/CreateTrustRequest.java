package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustRequest {
    public CreateTrustHeaders headers;
    public CreateTrustRequest withHeaders(CreateTrustHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTrustRequest request;
    public CreateTrustRequest withRequest(openapisdk.models.shared.CreateTrustRequest request) {
        this.request = request;
        return this;
    }
}