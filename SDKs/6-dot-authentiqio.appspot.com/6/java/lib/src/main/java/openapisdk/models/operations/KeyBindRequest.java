package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyBindRequest {
    public KeyBindPathParams pathParams;
    public KeyBindRequest withPathParams(KeyBindPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public byte[] request;
    public KeyBindRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}