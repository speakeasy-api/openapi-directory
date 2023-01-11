package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityVerificationAttributesRequest {
    public PostGetIdentityVerificationAttributesQueryParams queryParams;
    public PostGetIdentityVerificationAttributesRequest withQueryParams(PostGetIdentityVerificationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetIdentityVerificationAttributesHeaders headers;
    public PostGetIdentityVerificationAttributesRequest withHeaders(PostGetIdentityVerificationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetIdentityVerificationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}