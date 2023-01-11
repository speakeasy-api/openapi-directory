package openapisdk.models.operations;



public class TeamsListMembersRequest {
    public TeamsListMembersPathParams pathParams;
    public TeamsListMembersRequest withPathParams(TeamsListMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsListMembersQueryParams queryParams;
    public TeamsListMembersRequest withQueryParams(TeamsListMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}