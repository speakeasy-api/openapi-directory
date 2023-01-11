package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiskFromSnapshotRequest {
    public CreateDiskFromSnapshotHeaders headers;
    public CreateDiskFromSnapshotRequest withHeaders(CreateDiskFromSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDiskFromSnapshotRequest request;
    public CreateDiskFromSnapshotRequest withRequest(openapisdk.models.shared.CreateDiskFromSnapshotRequest request) {
        this.request = request;
        return this;
    }
}