package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDomainRequest {
    public PostDeleteDomainQueryParams queryParams;
    public PostDeleteDomainRequest withQueryParams(PostDeleteDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDomainHeaders headers;
    public PostDeleteDomainRequest withHeaders(PostDeleteDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}