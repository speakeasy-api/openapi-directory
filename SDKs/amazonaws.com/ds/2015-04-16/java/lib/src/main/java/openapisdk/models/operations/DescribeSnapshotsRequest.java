package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSnapshotsRequest {
    public DescribeSnapshotsHeaders headers;
    public DescribeSnapshotsRequest withHeaders(DescribeSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSnapshotsRequest request;
    public DescribeSnapshotsRequest withRequest(openapisdk.models.shared.DescribeSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}