package openapisdk.models.operations;



public class GistsListCommentsRequest {
    public GistsListCommentsPathParams pathParams;
    public GistsListCommentsRequest withPathParams(GistsListCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GistsListCommentsQueryParams queryParams;
    public GistsListCommentsRequest withQueryParams(GistsListCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}