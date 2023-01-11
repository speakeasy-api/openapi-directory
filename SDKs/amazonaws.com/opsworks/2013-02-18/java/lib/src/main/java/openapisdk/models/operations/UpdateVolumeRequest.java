package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVolumeRequest {
    public UpdateVolumeHeaders headers;
    public UpdateVolumeRequest withHeaders(UpdateVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVolumeRequest request;
    public UpdateVolumeRequest withRequest(openapisdk.models.shared.UpdateVolumeRequest request) {
        this.request = request;
        return this;
    }
}