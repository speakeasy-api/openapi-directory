package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EncryptRequest {
    public EncryptHeaders headers;
    public EncryptRequest withHeaders(EncryptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EncryptRequest request;
    public EncryptRequest withRequest(openapisdk.models.shared.EncryptRequest request) {
        this.request = request;
        return this;
    }
}