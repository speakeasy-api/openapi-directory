package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationUserRequest {
    public UpdateOrganizationUserPathParams pathParams;
    public UpdateOrganizationUserRequest withPathParams(UpdateOrganizationUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserAdminUpdate request;
    public UpdateOrganizationUserRequest withRequest(openapisdk.models.shared.UserAdminUpdate request) {
        this.request = request;
        return this;
    }
    public UpdateOrganizationUserSecurity security;
    public UpdateOrganizationUserRequest withSecurity(UpdateOrganizationUserSecurity security) {
        this.security = security;
        return this;
    }
}