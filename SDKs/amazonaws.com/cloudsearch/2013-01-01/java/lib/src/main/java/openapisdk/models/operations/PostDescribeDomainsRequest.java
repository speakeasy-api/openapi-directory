package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDomainsRequest {
    public PostDescribeDomainsQueryParams queryParams;
    public PostDescribeDomainsRequest withQueryParams(PostDescribeDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDomainsHeaders headers;
    public PostDescribeDomainsRequest withHeaders(PostDescribeDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDomainsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}