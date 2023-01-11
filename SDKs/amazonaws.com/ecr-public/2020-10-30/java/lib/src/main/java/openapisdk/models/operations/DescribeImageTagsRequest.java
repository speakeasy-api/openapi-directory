package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImageTagsRequest {
    public DescribeImageTagsQueryParams queryParams;
    public DescribeImageTagsRequest withQueryParams(DescribeImageTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeImageTagsHeaders headers;
    public DescribeImageTagsRequest withHeaders(DescribeImageTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImageTagsRequest request;
    public DescribeImageTagsRequest withRequest(openapisdk.models.shared.DescribeImageTagsRequest request) {
        this.request = request;
        return this;
    }
}