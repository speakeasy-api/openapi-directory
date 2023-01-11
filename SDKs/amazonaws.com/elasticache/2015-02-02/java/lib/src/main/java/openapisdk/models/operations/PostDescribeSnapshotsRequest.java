package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotsRequest {
    public PostDescribeSnapshotsQueryParams queryParams;
    public PostDescribeSnapshotsRequest withQueryParams(PostDescribeSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSnapshotsHeaders headers;
    public PostDescribeSnapshotsRequest withHeaders(PostDescribeSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}