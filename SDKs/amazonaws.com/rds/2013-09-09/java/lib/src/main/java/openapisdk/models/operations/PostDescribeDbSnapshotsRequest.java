package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSnapshotsRequest {
    public PostDescribeDbSnapshotsQueryParams queryParams;
    public PostDescribeDbSnapshotsRequest withQueryParams(PostDescribeDbSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbSnapshotsHeaders headers;
    public PostDescribeDbSnapshotsRequest withHeaders(PostDescribeDbSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}