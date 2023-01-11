package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomVerificationEmailTemplateRequest {
    public PostDeleteCustomVerificationEmailTemplateQueryParams queryParams;
    public PostDeleteCustomVerificationEmailTemplateRequest withQueryParams(PostDeleteCustomVerificationEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCustomVerificationEmailTemplateHeaders headers;
    public PostDeleteCustomVerificationEmailTemplateRequest withHeaders(PostDeleteCustomVerificationEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCustomVerificationEmailTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}