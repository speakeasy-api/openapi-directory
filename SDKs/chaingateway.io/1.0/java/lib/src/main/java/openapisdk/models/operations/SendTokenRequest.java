package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTokenRequest {
    public SendTokenHeaders headers;
    public SendTokenRequest withHeaders(SendTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTokenRequest request;
    public SendTokenRequest withRequest(openapisdk.models.shared.SendTokenRequest request) {
        this.request = request;
        return this;
    }
}