package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomVerificationEmailTemplateRequest {
    public CreateCustomVerificationEmailTemplateHeaders headers;
    public CreateCustomVerificationEmailTemplateRequest withHeaders(CreateCustomVerificationEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomVerificationEmailTemplateRequestBody request;
    public CreateCustomVerificationEmailTemplateRequest withRequest(CreateCustomVerificationEmailTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}