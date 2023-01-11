package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyUpdateRequest {
    public KeyUpdatePathParams pathParams;
    public KeyUpdateRequest withPathParams(KeyUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public byte[] request;
    public KeyUpdateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}