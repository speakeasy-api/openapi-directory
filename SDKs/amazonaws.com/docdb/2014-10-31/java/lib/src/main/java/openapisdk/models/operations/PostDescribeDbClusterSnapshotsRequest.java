package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterSnapshotsRequest {
    public PostDescribeDbClusterSnapshotsQueryParams queryParams;
    public PostDescribeDbClusterSnapshotsRequest withQueryParams(PostDescribeDbClusterSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterSnapshotsHeaders headers;
    public PostDescribeDbClusterSnapshotsRequest withHeaders(PostDescribeDbClusterSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}