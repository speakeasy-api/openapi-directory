package openapisdk.models.operations;



public class PostBundleRequest {
    public PostBundlePathParams pathParams;
    public PostBundleRequest withPathParams(PostBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostBundleQueryParams queryParams;
    public PostBundleRequest withQueryParams(PostBundleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}