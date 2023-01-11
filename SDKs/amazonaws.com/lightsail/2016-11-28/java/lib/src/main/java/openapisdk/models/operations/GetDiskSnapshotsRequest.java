package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiskSnapshotsRequest {
    public GetDiskSnapshotsHeaders headers;
    public GetDiskSnapshotsRequest withHeaders(GetDiskSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDiskSnapshotsRequest request;
    public GetDiskSnapshotsRequest withRequest(openapisdk.models.shared.GetDiskSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}