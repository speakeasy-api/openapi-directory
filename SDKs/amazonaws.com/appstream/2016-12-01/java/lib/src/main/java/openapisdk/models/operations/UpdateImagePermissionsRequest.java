package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateImagePermissionsRequest {
    public UpdateImagePermissionsHeaders headers;
    public UpdateImagePermissionsRequest withHeaders(UpdateImagePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateImagePermissionsRequest request;
    public UpdateImagePermissionsRequest withRequest(openapisdk.models.shared.UpdateImagePermissionsRequest request) {
        this.request = request;
        return this;
    }
}