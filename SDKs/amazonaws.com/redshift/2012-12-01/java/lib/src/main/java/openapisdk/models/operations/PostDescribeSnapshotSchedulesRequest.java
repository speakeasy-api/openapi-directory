package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotSchedulesRequest {
    public PostDescribeSnapshotSchedulesQueryParams queryParams;
    public PostDescribeSnapshotSchedulesRequest withQueryParams(PostDescribeSnapshotSchedulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSnapshotSchedulesHeaders headers;
    public PostDescribeSnapshotSchedulesRequest withHeaders(PostDescribeSnapshotSchedulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSnapshotSchedulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}