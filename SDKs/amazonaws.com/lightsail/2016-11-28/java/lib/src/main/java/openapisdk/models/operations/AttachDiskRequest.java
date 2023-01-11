package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachDiskRequest {
    public AttachDiskHeaders headers;
    public AttachDiskRequest withHeaders(AttachDiskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachDiskRequest request;
    public AttachDiskRequest withRequest(openapisdk.models.shared.AttachDiskRequest request) {
        this.request = request;
        return this;
    }
}