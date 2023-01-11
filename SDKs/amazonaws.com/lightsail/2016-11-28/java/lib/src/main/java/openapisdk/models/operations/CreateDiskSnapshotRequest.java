package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiskSnapshotRequest {
    public CreateDiskSnapshotHeaders headers;
    public CreateDiskSnapshotRequest withHeaders(CreateDiskSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDiskSnapshotRequest request;
    public CreateDiskSnapshotRequest withRequest(openapisdk.models.shared.CreateDiskSnapshotRequest request) {
        this.request = request;
        return this;
    }
}