package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateCustomVerificationEmailTemplateRequest {
    public PostUpdateCustomVerificationEmailTemplateQueryParams queryParams;
    public PostUpdateCustomVerificationEmailTemplateRequest withQueryParams(PostUpdateCustomVerificationEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateCustomVerificationEmailTemplateHeaders headers;
    public PostUpdateCustomVerificationEmailTemplateRequest withHeaders(PostUpdateCustomVerificationEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateCustomVerificationEmailTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}