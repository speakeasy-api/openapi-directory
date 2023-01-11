package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyEmailIdentityRequest {
    public PostVerifyEmailIdentityQueryParams queryParams;
    public PostVerifyEmailIdentityRequest withQueryParams(PostVerifyEmailIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostVerifyEmailIdentityHeaders headers;
    public PostVerifyEmailIdentityRequest withHeaders(PostVerifyEmailIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostVerifyEmailIdentityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}