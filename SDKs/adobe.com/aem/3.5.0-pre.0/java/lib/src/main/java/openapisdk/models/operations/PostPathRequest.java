package openapisdk.models.operations;



public class PostPathRequest {
    public PostPathPathParams pathParams;
    public PostPathRequest withPathParams(PostPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPathQueryParams queryParams;
    public PostPathRequest withQueryParams(PostPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}