package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCustomVerificationEmailTemplateRequest {
    public PostGetCustomVerificationEmailTemplateQueryParams queryParams;
    public PostGetCustomVerificationEmailTemplateRequest withQueryParams(PostGetCustomVerificationEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetCustomVerificationEmailTemplateHeaders headers;
    public PostGetCustomVerificationEmailTemplateRequest withHeaders(PostGetCustomVerificationEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetCustomVerificationEmailTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}