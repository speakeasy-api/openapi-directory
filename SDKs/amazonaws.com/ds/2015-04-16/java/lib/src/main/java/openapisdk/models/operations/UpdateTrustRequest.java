package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrustRequest {
    public UpdateTrustHeaders headers;
    public UpdateTrustRequest withHeaders(UpdateTrustHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTrustRequest request;
    public UpdateTrustRequest withRequest(openapisdk.models.shared.UpdateTrustRequest request) {
        this.request = request;
        return this;
    }
}