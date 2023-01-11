package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVolumeSnapshotRequest {
    public CreateVolumeSnapshotPathParams pathParams;
    public CreateVolumeSnapshotRequest withPathParams(CreateVolumeSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateVolumeSnapshotRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}