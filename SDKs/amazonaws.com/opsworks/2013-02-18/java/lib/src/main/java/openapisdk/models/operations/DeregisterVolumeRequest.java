package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterVolumeRequest {
    public DeregisterVolumeHeaders headers;
    public DeregisterVolumeRequest withHeaders(DeregisterVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterVolumeRequest request;
    public DeregisterVolumeRequest withRequest(openapisdk.models.shared.DeregisterVolumeRequest request) {
        this.request = request;
        return this;
    }
}