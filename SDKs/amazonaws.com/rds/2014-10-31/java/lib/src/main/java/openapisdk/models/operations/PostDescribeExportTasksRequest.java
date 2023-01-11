package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeExportTasksRequest {
    public PostDescribeExportTasksQueryParams queryParams;
    public PostDescribeExportTasksRequest withQueryParams(PostDescribeExportTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeExportTasksHeaders headers;
    public PostDescribeExportTasksRequest withHeaders(PostDescribeExportTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeExportTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}