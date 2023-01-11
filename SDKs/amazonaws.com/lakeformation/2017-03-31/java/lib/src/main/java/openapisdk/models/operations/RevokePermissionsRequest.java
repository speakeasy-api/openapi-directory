package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokePermissionsRequest {
    public RevokePermissionsHeaders headers;
    public RevokePermissionsRequest withHeaders(RevokePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokePermissionsRequest request;
    public RevokePermissionsRequest withRequest(openapisdk.models.shared.RevokePermissionsRequest request) {
        this.request = request;
        return this;
    }
}