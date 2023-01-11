package openapisdk.models.operations;



public class CareTeamMembersReadRequest {
    public CareTeamMembersReadPathParams pathParams;
    public CareTeamMembersReadRequest withPathParams(CareTeamMembersReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CareTeamMembersReadQueryParams queryParams;
    public CareTeamMembersReadRequest withQueryParams(CareTeamMembersReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CareTeamMembersReadSecurity security;
    public CareTeamMembersReadRequest withSecurity(CareTeamMembersReadSecurity security) {
        this.security = security;
        return this;
    }
}