package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeExportImageTasksRequest {
    public PostDescribeExportImageTasksQueryParams queryParams;
    public PostDescribeExportImageTasksRequest withQueryParams(PostDescribeExportImageTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeExportImageTasksHeaders headers;
    public PostDescribeExportImageTasksRequest withHeaders(PostDescribeExportImageTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeExportImageTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}