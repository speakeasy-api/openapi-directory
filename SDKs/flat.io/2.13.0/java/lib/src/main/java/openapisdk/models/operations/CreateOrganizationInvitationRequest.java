package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationInvitationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrganizationInvitationCreation request;
    public CreateOrganizationInvitationRequest withRequest(openapisdk.models.shared.OrganizationInvitationCreation request) {
        this.request = request;
        return this;
    }
    public CreateOrganizationInvitationSecurity security;
    public CreateOrganizationInvitationRequest withSecurity(CreateOrganizationInvitationSecurity security) {
        this.security = security;
        return this;
    }
}