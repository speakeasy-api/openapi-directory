package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignVolumeRequest {
    public AssignVolumeHeaders headers;
    public AssignVolumeRequest withHeaders(AssignVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignVolumeRequest request;
    public AssignVolumeRequest withRequest(openapisdk.models.shared.AssignVolumeRequest request) {
        this.request = request;
        return this;
    }
}