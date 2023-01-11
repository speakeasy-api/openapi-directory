package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectCollaboratorsInviteRequest {
    public PrivateProjectCollaboratorsInvitePathParams pathParams;
    public PrivateProjectCollaboratorsInviteRequest withPathParams(PrivateProjectCollaboratorsInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectCollaboratorInvite request;
    public PrivateProjectCollaboratorsInviteRequest withRequest(openapisdk.models.shared.ProjectCollaboratorInvite request) {
        this.request = request;
        return this;
    }
    public PrivateProjectCollaboratorsInviteSecurity security;
    public PrivateProjectCollaboratorsInviteRequest withSecurity(PrivateProjectCollaboratorsInviteSecurity security) {
        this.security = security;
        return this;
    }
}