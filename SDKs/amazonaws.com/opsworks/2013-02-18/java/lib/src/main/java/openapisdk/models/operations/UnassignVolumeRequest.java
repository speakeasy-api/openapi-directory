package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignVolumeRequest {
    public UnassignVolumeHeaders headers;
    public UnassignVolumeRequest withHeaders(UnassignVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnassignVolumeRequest request;
    public UnassignVolumeRequest withRequest(openapisdk.models.shared.UnassignVolumeRequest request) {
        this.request = request;
        return this;
    }
}