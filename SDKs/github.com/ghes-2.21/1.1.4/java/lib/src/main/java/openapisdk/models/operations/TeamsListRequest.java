package openapisdk.models.operations;



public class TeamsListRequest {
    public TeamsListPathParams pathParams;
    public TeamsListRequest withPathParams(TeamsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsListQueryParams queryParams;
    public TeamsListRequest withQueryParams(TeamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}