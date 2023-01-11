package openapisdk.models.operations;



public class CareTeamMembersListRequest {
    public CareTeamMembersListQueryParams queryParams;
    public CareTeamMembersListRequest withQueryParams(CareTeamMembersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CareTeamMembersListSecurity security;
    public CareTeamMembersListRequest withSecurity(CareTeamMembersListSecurity security) {
        this.security = security;
        return this;
    }
}