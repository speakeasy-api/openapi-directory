package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyDomainIdentityRequest {
    public PostVerifyDomainIdentityQueryParams queryParams;
    public PostVerifyDomainIdentityRequest withQueryParams(PostVerifyDomainIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostVerifyDomainIdentityHeaders headers;
    public PostVerifyDomainIdentityRequest withHeaders(PostVerifyDomainIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostVerifyDomainIdentityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}