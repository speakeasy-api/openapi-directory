package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstancesFromSnapshotRequest {
    public CreateInstancesFromSnapshotHeaders headers;
    public CreateInstancesFromSnapshotRequest withHeaders(CreateInstancesFromSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstancesFromSnapshotRequest request;
    public CreateInstancesFromSnapshotRequest withRequest(openapisdk.models.shared.CreateInstancesFromSnapshotRequest request) {
        this.request = request;
        return this;
    }
}