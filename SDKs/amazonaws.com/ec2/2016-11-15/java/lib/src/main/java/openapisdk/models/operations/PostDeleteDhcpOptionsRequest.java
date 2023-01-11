package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDhcpOptionsRequest {
    public PostDeleteDhcpOptionsQueryParams queryParams;
    public PostDeleteDhcpOptionsRequest withQueryParams(PostDeleteDhcpOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDhcpOptionsHeaders headers;
    public PostDeleteDhcpOptionsRequest withHeaders(PostDeleteDhcpOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDhcpOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}