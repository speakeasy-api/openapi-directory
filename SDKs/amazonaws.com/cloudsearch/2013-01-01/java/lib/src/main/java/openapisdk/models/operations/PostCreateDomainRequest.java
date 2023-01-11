package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDomainRequest {
    public PostCreateDomainQueryParams queryParams;
    public PostCreateDomainRequest withQueryParams(PostCreateDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDomainHeaders headers;
    public PostCreateDomainRequest withHeaders(PostCreateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}