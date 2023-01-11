package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImagesRequest {
    public PostDescribeImagesQueryParams queryParams;
    public PostDescribeImagesRequest withQueryParams(PostDescribeImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeImagesHeaders headers;
    public PostDescribeImagesRequest withHeaders(PostDescribeImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeImagesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}