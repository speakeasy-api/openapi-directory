package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendEmailRequest {
    public SendEmailHeaders headers;
    public SendEmailRequest withHeaders(SendEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendEmailRequestBody request;
    public SendEmailRequest withRequest(SendEmailRequestBody request) {
        this.request = request;
        return this;
    }
}