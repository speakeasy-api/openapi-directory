package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSnapshotRequest {
    public CreateSnapshotHeaders headers;
    public CreateSnapshotRequest withHeaders(CreateSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSnapshotRequest request;
    public CreateSnapshotRequest withRequest(openapisdk.models.shared.CreateSnapshotRequest request) {
        this.request = request;
        return this;
    }
}