package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDhcpOptionsRequest {
    public PostDescribeDhcpOptionsQueryParams queryParams;
    public PostDescribeDhcpOptionsRequest withQueryParams(PostDescribeDhcpOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDhcpOptionsHeaders headers;
    public PostDescribeDhcpOptionsRequest withHeaders(PostDescribeDhcpOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDhcpOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}