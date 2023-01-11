package openapisdk.models.operations;



public class CollectionArticlesRequest {
    public CollectionArticlesPathParams pathParams;
    public CollectionArticlesRequest withPathParams(CollectionArticlesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CollectionArticlesQueryParams queryParams;
    public CollectionArticlesRequest withQueryParams(CollectionArticlesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}