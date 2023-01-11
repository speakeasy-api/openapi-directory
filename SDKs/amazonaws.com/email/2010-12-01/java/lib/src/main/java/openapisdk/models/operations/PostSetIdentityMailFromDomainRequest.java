package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityMailFromDomainRequest {
    public PostSetIdentityMailFromDomainQueryParams queryParams;
    public PostSetIdentityMailFromDomainRequest withQueryParams(PostSetIdentityMailFromDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIdentityMailFromDomainHeaders headers;
    public PostSetIdentityMailFromDomainRequest withHeaders(PostSetIdentityMailFromDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIdentityMailFromDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}