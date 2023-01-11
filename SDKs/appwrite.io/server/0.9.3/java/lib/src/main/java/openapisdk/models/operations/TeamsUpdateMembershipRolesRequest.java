package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateMembershipRolesRequest {
    public TeamsUpdateMembershipRolesPathParams pathParams;
    public TeamsUpdateMembershipRolesRequest withPathParams(TeamsUpdateMembershipRolesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateMembershipRolesRequestBody request;
    public TeamsUpdateMembershipRolesRequest withRequest(TeamsUpdateMembershipRolesRequestBody request) {
        this.request = request;
        return this;
    }
    public TeamsUpdateMembershipRolesSecurity security;
    public TeamsUpdateMembershipRolesRequest withSecurity(TeamsUpdateMembershipRolesSecurity security) {
        this.security = security;
        return this;
    }
}