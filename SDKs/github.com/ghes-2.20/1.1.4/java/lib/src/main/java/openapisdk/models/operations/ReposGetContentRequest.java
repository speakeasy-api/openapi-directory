package openapisdk.models.operations;



public class ReposGetContentRequest {
    public ReposGetContentPathParams pathParams;
    public ReposGetContentRequest withPathParams(ReposGetContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposGetContentQueryParams queryParams;
    public ReposGetContentRequest withQueryParams(ReposGetContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}