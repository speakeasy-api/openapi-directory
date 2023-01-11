package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomVerificationEmailTemplateRequest {
    public PostCreateCustomVerificationEmailTemplateQueryParams queryParams;
    public PostCreateCustomVerificationEmailTemplateRequest withQueryParams(PostCreateCustomVerificationEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCustomVerificationEmailTemplateHeaders headers;
    public PostCreateCustomVerificationEmailTemplateRequest withHeaders(PostCreateCustomVerificationEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCustomVerificationEmailTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}