package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDefaultSearchFieldRequest {
    public PostDescribeDefaultSearchFieldQueryParams queryParams;
    public PostDescribeDefaultSearchFieldRequest withQueryParams(PostDescribeDefaultSearchFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDefaultSearchFieldHeaders headers;
    public PostDescribeDefaultSearchFieldRequest withHeaders(PostDescribeDefaultSearchFieldHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDefaultSearchFieldRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}