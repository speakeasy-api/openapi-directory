package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableKeyRequest {
    public DisableKeyHeaders headers;
    public DisableKeyRequest withHeaders(DisableKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableKeyRequest request;
    public DisableKeyRequest withRequest(openapisdk.models.shared.DisableKeyRequest request) {
        this.request = request;
        return this;
    }
}