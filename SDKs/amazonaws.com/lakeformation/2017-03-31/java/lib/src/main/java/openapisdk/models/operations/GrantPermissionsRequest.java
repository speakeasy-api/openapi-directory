package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GrantPermissionsRequest {
    public GrantPermissionsHeaders headers;
    public GrantPermissionsRequest withHeaders(GrantPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GrantPermissionsRequest request;
    public GrantPermissionsRequest withRequest(openapisdk.models.shared.GrantPermissionsRequest request) {
        this.request = request;
        return this;
    }
}