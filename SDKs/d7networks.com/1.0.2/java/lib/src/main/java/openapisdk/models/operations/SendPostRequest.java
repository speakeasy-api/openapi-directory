package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendPostRequest {
    public SendPostHeaders headers;
    public SendPostRequest withHeaders(SendPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendSmsRequest request;
    public SendPostRequest withRequest(openapisdk.models.shared.SendSmsRequest request) {
        this.request = request;
        return this;
    }
}