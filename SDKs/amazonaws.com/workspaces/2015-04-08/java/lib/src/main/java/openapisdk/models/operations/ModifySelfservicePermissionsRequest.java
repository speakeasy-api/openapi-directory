package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifySelfservicePermissionsRequest {
    public ModifySelfservicePermissionsHeaders headers;
    public ModifySelfservicePermissionsRequest withHeaders(ModifySelfservicePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifySelfservicePermissionsRequest request;
    public ModifySelfservicePermissionsRequest withRequest(openapisdk.models.shared.ModifySelfservicePermissionsRequest request) {
        this.request = request;
        return this;
    }
}