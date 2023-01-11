package openapisdk.models.operations;



public class GistsListCommitsRequest {
    public GistsListCommitsPathParams pathParams;
    public GistsListCommitsRequest withPathParams(GistsListCommitsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GistsListCommitsQueryParams queryParams;
    public GistsListCommitsRequest withQueryParams(GistsListCommitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}