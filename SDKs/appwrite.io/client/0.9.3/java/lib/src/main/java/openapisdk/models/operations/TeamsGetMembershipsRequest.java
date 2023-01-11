package openapisdk.models.operations;



public class TeamsGetMembershipsRequest {
    public TeamsGetMembershipsPathParams pathParams;
    public TeamsGetMembershipsRequest withPathParams(TeamsGetMembershipsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsGetMembershipsQueryParams queryParams;
    public TeamsGetMembershipsRequest withQueryParams(TeamsGetMembershipsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TeamsGetMembershipsSecurity security;
    public TeamsGetMembershipsRequest withSecurity(TeamsGetMembershipsSecurity security) {
        this.security = security;
        return this;
    }
}