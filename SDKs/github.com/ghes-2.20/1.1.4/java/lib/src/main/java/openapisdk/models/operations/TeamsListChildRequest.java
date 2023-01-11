package openapisdk.models.operations;



public class TeamsListChildRequest {
    public TeamsListChildPathParams pathParams;
    public TeamsListChildRequest withPathParams(TeamsListChildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsListChildQueryParams queryParams;
    public TeamsListChildRequest withQueryParams(TeamsListChildQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}