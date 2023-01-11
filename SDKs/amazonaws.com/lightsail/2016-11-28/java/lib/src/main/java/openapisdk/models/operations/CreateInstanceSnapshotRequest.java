package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstanceSnapshotRequest {
    public CreateInstanceSnapshotHeaders headers;
    public CreateInstanceSnapshotRequest withHeaders(CreateInstanceSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstanceSnapshotRequest request;
    public CreateInstanceSnapshotRequest withRequest(openapisdk.models.shared.CreateInstanceSnapshotRequest request) {
        this.request = request;
        return this;
    }
}