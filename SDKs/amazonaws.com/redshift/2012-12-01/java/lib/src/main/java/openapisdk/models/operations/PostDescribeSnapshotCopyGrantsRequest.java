package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotCopyGrantsRequest {
    public PostDescribeSnapshotCopyGrantsQueryParams queryParams;
    public PostDescribeSnapshotCopyGrantsRequest withQueryParams(PostDescribeSnapshotCopyGrantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSnapshotCopyGrantsHeaders headers;
    public PostDescribeSnapshotCopyGrantsRequest withHeaders(PostDescribeSnapshotCopyGrantsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSnapshotCopyGrantsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}