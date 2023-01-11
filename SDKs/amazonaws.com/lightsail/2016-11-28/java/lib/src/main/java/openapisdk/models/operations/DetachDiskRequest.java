package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachDiskRequest {
    public DetachDiskHeaders headers;
    public DetachDiskRequest withHeaders(DetachDiskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachDiskRequest request;
    public DetachDiskRequest withRequest(openapisdk.models.shared.DetachDiskRequest request) {
        this.request = request;
        return this;
    }
}