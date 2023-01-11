package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreCollaboratorRequest {
    public AddScoreCollaboratorPathParams pathParams;
    public AddScoreCollaboratorRequest withPathParams(AddScoreCollaboratorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceCollaboratorCreation request;
    public AddScoreCollaboratorRequest withRequest(openapisdk.models.shared.ResourceCollaboratorCreation request) {
        this.request = request;
        return this;
    }
    public AddScoreCollaboratorSecurity security;
    public AddScoreCollaboratorRequest withSecurity(AddScoreCollaboratorSecurity security) {
        this.security = security;
        return this;
    }
}