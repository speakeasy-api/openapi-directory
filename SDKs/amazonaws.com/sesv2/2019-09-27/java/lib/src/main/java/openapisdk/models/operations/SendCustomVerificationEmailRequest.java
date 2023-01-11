package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendCustomVerificationEmailRequest {
    public SendCustomVerificationEmailHeaders headers;
    public SendCustomVerificationEmailRequest withHeaders(SendCustomVerificationEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendCustomVerificationEmailRequestBody request;
    public SendCustomVerificationEmailRequest withRequest(SendCustomVerificationEmailRequestBody request) {
        this.request = request;
        return this;
    }
}