package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiskSnapshotRequest {
    public GetDiskSnapshotHeaders headers;
    public GetDiskSnapshotRequest withHeaders(GetDiskSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDiskSnapshotRequest request;
    public GetDiskSnapshotRequest withRequest(openapisdk.models.shared.GetDiskSnapshotRequest request) {
        this.request = request;
        return this;
    }
}