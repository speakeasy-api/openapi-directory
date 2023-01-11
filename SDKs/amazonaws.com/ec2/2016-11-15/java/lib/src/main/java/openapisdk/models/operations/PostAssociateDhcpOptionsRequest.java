package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateDhcpOptionsRequest {
    public PostAssociateDhcpOptionsQueryParams queryParams;
    public PostAssociateDhcpOptionsRequest withQueryParams(PostAssociateDhcpOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateDhcpOptionsHeaders headers;
    public PostAssociateDhcpOptionsRequest withHeaders(PostAssociateDhcpOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateDhcpOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}