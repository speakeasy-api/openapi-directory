package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDhcpOptionsRequest {
    public PostCreateDhcpOptionsQueryParams queryParams;
    public PostCreateDhcpOptionsRequest withQueryParams(PostCreateDhcpOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDhcpOptionsHeaders headers;
    public PostCreateDhcpOptionsRequest withHeaders(PostCreateDhcpOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDhcpOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}