package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationSnapshotRequest {
    public CreateApplicationSnapshotHeaders headers;
    public CreateApplicationSnapshotRequest withHeaders(CreateApplicationSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateApplicationSnapshotRequest request;
    public CreateApplicationSnapshotRequest withRequest(openapisdk.models.shared.CreateApplicationSnapshotRequest request) {
        this.request = request;
        return this;
    }
}