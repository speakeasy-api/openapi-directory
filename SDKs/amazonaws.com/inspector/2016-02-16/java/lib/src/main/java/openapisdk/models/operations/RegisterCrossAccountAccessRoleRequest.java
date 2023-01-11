package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCrossAccountAccessRoleRequest {
    public RegisterCrossAccountAccessRoleHeaders headers;
    public RegisterCrossAccountAccessRoleRequest withHeaders(RegisterCrossAccountAccessRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterCrossAccountAccessRoleRequest request;
    public RegisterCrossAccountAccessRoleRequest withRequest(openapisdk.models.shared.RegisterCrossAccountAccessRoleRequest request) {
        this.request = request;
        return this;
    }
}