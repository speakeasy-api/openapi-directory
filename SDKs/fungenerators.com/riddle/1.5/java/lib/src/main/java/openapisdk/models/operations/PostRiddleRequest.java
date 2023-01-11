package openapisdk.models.operations;



public class PostRiddleRequest {
    public PostRiddleQueryParams queryParams;
    public PostRiddleRequest withQueryParams(PostRiddleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRiddleSecurity security;
    public PostRiddleRequest withSecurity(PostRiddleSecurity security) {
        this.security = security;
        return this;
    }
}