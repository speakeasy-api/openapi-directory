package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIndexFieldsRequest {
    public PostDescribeIndexFieldsQueryParams queryParams;
    public PostDescribeIndexFieldsRequest withQueryParams(PostDescribeIndexFieldsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeIndexFieldsHeaders headers;
    public PostDescribeIndexFieldsRequest withHeaders(PostDescribeIndexFieldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeIndexFieldsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}