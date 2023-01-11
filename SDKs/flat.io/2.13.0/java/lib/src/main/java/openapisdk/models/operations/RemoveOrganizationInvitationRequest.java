package openapisdk.models.operations;



public class RemoveOrganizationInvitationRequest {
    public RemoveOrganizationInvitationPathParams pathParams;
    public RemoveOrganizationInvitationRequest withPathParams(RemoveOrganizationInvitationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveOrganizationInvitationSecurity security;
    public RemoveOrganizationInvitationRequest withSecurity(RemoveOrganizationInvitationSecurity security) {
        this.security = security;
        return this;
    }
}