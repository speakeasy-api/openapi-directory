package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutoSnapshotsRequest {
    public GetAutoSnapshotsHeaders headers;
    public GetAutoSnapshotsRequest withHeaders(GetAutoSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAutoSnapshotsRequest request;
    public GetAutoSnapshotsRequest withRequest(openapisdk.models.shared.GetAutoSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}