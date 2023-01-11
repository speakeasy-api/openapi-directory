package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityMailFromDomainAttributesRequest {
    public PostGetIdentityMailFromDomainAttributesQueryParams queryParams;
    public PostGetIdentityMailFromDomainAttributesRequest withQueryParams(PostGetIdentityMailFromDomainAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetIdentityMailFromDomainAttributesHeaders headers;
    public PostGetIdentityMailFromDomainAttributesRequest withHeaders(PostGetIdentityMailFromDomainAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetIdentityMailFromDomainAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}