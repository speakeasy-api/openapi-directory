package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListCustomVerificationEmailTemplatesRequest {
    public PostListCustomVerificationEmailTemplatesQueryParams queryParams;
    public PostListCustomVerificationEmailTemplatesRequest withQueryParams(PostListCustomVerificationEmailTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListCustomVerificationEmailTemplatesHeaders headers;
    public PostListCustomVerificationEmailTemplatesRequest withHeaders(PostListCustomVerificationEmailTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListCustomVerificationEmailTemplatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}