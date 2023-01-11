package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceSnapshotRequest {
    public GetInstanceSnapshotHeaders headers;
    public GetInstanceSnapshotRequest withHeaders(GetInstanceSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceSnapshotRequest request;
    public GetInstanceSnapshotRequest withRequest(openapisdk.models.shared.GetInstanceSnapshotRequest request) {
        this.request = request;
        return this;
    }
}