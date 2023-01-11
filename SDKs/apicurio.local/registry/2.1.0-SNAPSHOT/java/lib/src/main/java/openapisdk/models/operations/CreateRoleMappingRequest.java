package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleMappingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RoleMapping request;
    public CreateRoleMappingRequest withRequest(openapisdk.models.shared.RoleMapping request) {
        this.request = request;
        return this;
    }
}