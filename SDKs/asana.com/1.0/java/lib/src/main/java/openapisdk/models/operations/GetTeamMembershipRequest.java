package openapisdk.models.operations;



public class GetTeamMembershipRequest {
    public GetTeamMembershipPathParams pathParams;
    public GetTeamMembershipRequest withPathParams(GetTeamMembershipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamMembershipQueryParams queryParams;
    public GetTeamMembershipRequest withQueryParams(GetTeamMembershipQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}