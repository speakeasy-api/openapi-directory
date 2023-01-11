package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAccountAttributesRequest {
    public PostDescribeAccountAttributesQueryParams queryParams;
    public PostDescribeAccountAttributesRequest withQueryParams(PostDescribeAccountAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAccountAttributesHeaders headers;
    public PostDescribeAccountAttributesRequest withHeaders(PostDescribeAccountAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAccountAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}