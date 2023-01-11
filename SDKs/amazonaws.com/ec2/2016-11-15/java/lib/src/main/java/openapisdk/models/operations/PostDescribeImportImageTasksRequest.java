package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImportImageTasksRequest {
    public PostDescribeImportImageTasksQueryParams queryParams;
    public PostDescribeImportImageTasksRequest withQueryParams(PostDescribeImportImageTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeImportImageTasksHeaders headers;
    public PostDescribeImportImageTasksRequest withHeaders(PostDescribeImportImageTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeImportImageTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}