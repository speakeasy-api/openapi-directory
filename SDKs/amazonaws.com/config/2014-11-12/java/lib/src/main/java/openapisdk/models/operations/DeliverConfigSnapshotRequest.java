package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeliverConfigSnapshotRequest {
    public DeliverConfigSnapshotHeaders headers;
    public DeliverConfigSnapshotRequest withHeaders(DeliverConfigSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeliverConfigSnapshotRequest request;
    public DeliverConfigSnapshotRequest withRequest(openapisdk.models.shared.DeliverConfigSnapshotRequest request) {
        this.request = request;
        return this;
    }
}