package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendEthereumRequest {
    public SendEthereumHeaders headers;
    public SendEthereumRequest withHeaders(SendEthereumHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendEthereumRequest request;
    public SendEthereumRequest withRequest(openapisdk.models.shared.SendEthereumRequest request) {
        this.request = request;
        return this;
    }
}