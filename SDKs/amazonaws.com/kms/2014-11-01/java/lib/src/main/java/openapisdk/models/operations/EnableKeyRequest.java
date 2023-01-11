package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableKeyRequest {
    public EnableKeyHeaders headers;
    public EnableKeyRequest withHeaders(EnableKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableKeyRequest request;
    public EnableKeyRequest withRequest(openapisdk.models.shared.EnableKeyRequest request) {
        this.request = request;
        return this;
    }
}