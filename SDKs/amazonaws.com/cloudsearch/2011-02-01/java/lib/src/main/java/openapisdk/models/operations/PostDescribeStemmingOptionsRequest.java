package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStemmingOptionsRequest {
    public PostDescribeStemmingOptionsQueryParams queryParams;
    public PostDescribeStemmingOptionsRequest withQueryParams(PostDescribeStemmingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeStemmingOptionsHeaders headers;
    public PostDescribeStemmingOptionsRequest withHeaders(PostDescribeStemmingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeStemmingOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}