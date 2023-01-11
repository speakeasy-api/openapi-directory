package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicationSnapshotRequest {
    public DescribeApplicationSnapshotHeaders headers;
    public DescribeApplicationSnapshotRequest withHeaders(DescribeApplicationSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApplicationSnapshotRequest request;
    public DescribeApplicationSnapshotRequest withRequest(openapisdk.models.shared.DescribeApplicationSnapshotRequest request) {
        this.request = request;
        return this;
    }
}