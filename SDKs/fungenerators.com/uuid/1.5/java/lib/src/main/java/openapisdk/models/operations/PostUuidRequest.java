package openapisdk.models.operations;



public class PostUuidRequest {
    public PostUuidQueryParams queryParams;
    public PostUuidRequest withQueryParams(PostUuidQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUuidSecurity security;
    public PostUuidRequest withSecurity(PostUuidSecurity security) {
        this.security = security;
        return this;
    }
}