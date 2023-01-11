package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyRegisterRequest {
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public byte[] request;
    public KeyRegisterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}