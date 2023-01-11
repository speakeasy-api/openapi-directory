package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStoreImageTasksRequest {
    public PostDescribeStoreImageTasksQueryParams queryParams;
    public PostDescribeStoreImageTasksRequest withQueryParams(PostDescribeStoreImageTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeStoreImageTasksHeaders headers;
    public PostDescribeStoreImageTasksRequest withHeaders(PostDescribeStoreImageTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeStoreImageTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}