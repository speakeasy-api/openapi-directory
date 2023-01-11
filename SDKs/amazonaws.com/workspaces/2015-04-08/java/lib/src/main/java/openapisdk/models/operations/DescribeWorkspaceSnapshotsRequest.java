package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceSnapshotsRequest {
    public DescribeWorkspaceSnapshotsHeaders headers;
    public DescribeWorkspaceSnapshotsRequest withHeaders(DescribeWorkspaceSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspaceSnapshotsRequest request;
    public DescribeWorkspaceSnapshotsRequest withRequest(openapisdk.models.shared.DescribeWorkspaceSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}