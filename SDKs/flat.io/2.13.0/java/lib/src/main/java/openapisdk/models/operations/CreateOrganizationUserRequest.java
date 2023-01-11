package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserCreation request;
    public CreateOrganizationUserRequest withRequest(openapisdk.models.shared.UserCreation request) {
        this.request = request;
        return this;
    }
    public CreateOrganizationUserSecurity security;
    public CreateOrganizationUserRequest withSecurity(CreateOrganizationUserSecurity security) {
        this.security = security;
        return this;
    }
}