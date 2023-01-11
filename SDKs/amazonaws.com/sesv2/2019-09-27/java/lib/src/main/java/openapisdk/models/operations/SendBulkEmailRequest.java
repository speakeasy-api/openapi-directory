package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendBulkEmailRequest {
    public SendBulkEmailHeaders headers;
    public SendBulkEmailRequest withHeaders(SendBulkEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendBulkEmailRequestBody request;
    public SendBulkEmailRequest withRequest(SendBulkEmailRequestBody request) {
        this.request = request;
        return this;
    }
}