package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDomainsRequest {
    public PostListDomainsQueryParams queryParams;
    public PostListDomainsRequest withQueryParams(PostListDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListDomainsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}