package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyDomainDkimRequest {
    public PostVerifyDomainDkimQueryParams queryParams;
    public PostVerifyDomainDkimRequest withQueryParams(PostVerifyDomainDkimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostVerifyDomainDkimHeaders headers;
    public PostVerifyDomainDkimRequest withHeaders(PostVerifyDomainDkimHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostVerifyDomainDkimRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}