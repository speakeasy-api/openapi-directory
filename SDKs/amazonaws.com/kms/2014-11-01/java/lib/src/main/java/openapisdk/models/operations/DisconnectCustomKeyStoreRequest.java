package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisconnectCustomKeyStoreRequest {
    public DisconnectCustomKeyStoreHeaders headers;
    public DisconnectCustomKeyStoreRequest withHeaders(DisconnectCustomKeyStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisconnectCustomKeyStoreRequest request;
    public DisconnectCustomKeyStoreRequest withRequest(openapisdk.models.shared.DisconnectCustomKeyStoreRequest request) {
        this.request = request;
        return this;
    }
}