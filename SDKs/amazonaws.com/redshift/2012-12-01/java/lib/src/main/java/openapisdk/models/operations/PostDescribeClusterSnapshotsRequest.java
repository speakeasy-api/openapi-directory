package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterSnapshotsRequest {
    public PostDescribeClusterSnapshotsQueryParams queryParams;
    public PostDescribeClusterSnapshotsRequest withQueryParams(PostDescribeClusterSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterSnapshotsHeaders headers;
    public PostDescribeClusterSnapshotsRequest withHeaders(PostDescribeClusterSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}