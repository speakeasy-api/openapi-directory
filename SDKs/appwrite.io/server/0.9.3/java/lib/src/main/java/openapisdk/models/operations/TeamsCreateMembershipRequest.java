package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateMembershipRequest {
    public TeamsCreateMembershipPathParams pathParams;
    public TeamsCreateMembershipRequest withPathParams(TeamsCreateMembershipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateMembershipRequestBody request;
    public TeamsCreateMembershipRequest withRequest(TeamsCreateMembershipRequestBody request) {
        this.request = request;
        return this;
    }
    public TeamsCreateMembershipSecurity security;
    public TeamsCreateMembershipRequest withSecurity(TeamsCreateMembershipSecurity security) {
        this.security = security;
        return this;
    }
}