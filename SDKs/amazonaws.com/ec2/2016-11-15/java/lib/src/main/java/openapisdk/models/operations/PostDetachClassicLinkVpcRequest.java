package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachClassicLinkVpcRequest {
    public PostDetachClassicLinkVpcQueryParams queryParams;
    public PostDetachClassicLinkVpcRequest withQueryParams(PostDetachClassicLinkVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachClassicLinkVpcHeaders headers;
    public PostDetachClassicLinkVpcRequest withHeaders(PostDetachClassicLinkVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachClassicLinkVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}