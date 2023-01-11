package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationSnapshotsRequest {
    public ListApplicationSnapshotsHeaders headers;
    public ListApplicationSnapshotsRequest withHeaders(ListApplicationSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApplicationSnapshotsRequest request;
    public ListApplicationSnapshotsRequest withRequest(openapisdk.models.shared.ListApplicationSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}