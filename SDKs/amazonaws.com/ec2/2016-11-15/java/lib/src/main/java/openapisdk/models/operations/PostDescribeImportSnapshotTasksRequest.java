package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImportSnapshotTasksRequest {
    public PostDescribeImportSnapshotTasksQueryParams queryParams;
    public PostDescribeImportSnapshotTasksRequest withQueryParams(PostDescribeImportSnapshotTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeImportSnapshotTasksHeaders headers;
    public PostDescribeImportSnapshotTasksRequest withHeaders(PostDescribeImportSnapshotTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeImportSnapshotTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}