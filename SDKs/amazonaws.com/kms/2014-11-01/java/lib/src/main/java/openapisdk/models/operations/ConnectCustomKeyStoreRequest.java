package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectCustomKeyStoreRequest {
    public ConnectCustomKeyStoreHeaders headers;
    public ConnectCustomKeyStoreRequest withHeaders(ConnectCustomKeyStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectCustomKeyStoreRequest request;
    public ConnectCustomKeyStoreRequest withRequest(openapisdk.models.shared.ConnectCustomKeyStoreRequest request) {
        this.request = request;
        return this;
    }
}