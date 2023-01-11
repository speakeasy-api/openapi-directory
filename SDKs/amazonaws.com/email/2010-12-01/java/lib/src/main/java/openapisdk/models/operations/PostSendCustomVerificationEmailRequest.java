package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendCustomVerificationEmailRequest {
    public PostSendCustomVerificationEmailQueryParams queryParams;
    public PostSendCustomVerificationEmailRequest withQueryParams(PostSendCustomVerificationEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendCustomVerificationEmailHeaders headers;
    public PostSendCustomVerificationEmailRequest withHeaders(PostSendCustomVerificationEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendCustomVerificationEmailRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}