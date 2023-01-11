package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendbatchPostRequest {
    public SendbatchPostHeaders headers;
    public SendbatchPostRequest withHeaders(SendbatchPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkSmsRequest request;
    public SendbatchPostRequest withRequest(openapisdk.models.shared.BulkSmsRequest request) {
        this.request = request;
        return this;
    }
}