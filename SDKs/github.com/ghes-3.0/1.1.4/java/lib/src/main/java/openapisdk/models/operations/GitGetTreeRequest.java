package openapisdk.models.operations;



public class GitGetTreeRequest {
    public GitGetTreePathParams pathParams;
    public GitGetTreeRequest withPathParams(GitGetTreePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GitGetTreeQueryParams queryParams;
    public GitGetTreeRequest withQueryParams(GitGetTreeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}