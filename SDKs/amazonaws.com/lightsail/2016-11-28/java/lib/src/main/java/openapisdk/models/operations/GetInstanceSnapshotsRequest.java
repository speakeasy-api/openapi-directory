package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceSnapshotsRequest {
    public GetInstanceSnapshotsHeaders headers;
    public GetInstanceSnapshotsRequest withHeaders(GetInstanceSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceSnapshotsRequest request;
    public GetInstanceSnapshotsRequest withRequest(openapisdk.models.shared.GetInstanceSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}