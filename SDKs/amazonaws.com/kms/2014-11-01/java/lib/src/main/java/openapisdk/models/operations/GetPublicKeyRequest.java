package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicKeyRequest {
    public GetPublicKeyHeaders headers;
    public GetPublicKeyRequest withHeaders(GetPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPublicKeyRequest request;
    public GetPublicKeyRequest withRequest(openapisdk.models.shared.GetPublicKeyRequest request) {
        this.request = request;
        return this;
    }
}