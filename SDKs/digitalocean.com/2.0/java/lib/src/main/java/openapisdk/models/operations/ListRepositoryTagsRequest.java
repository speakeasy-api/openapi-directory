package openapisdk.models.operations;



public class ListRepositoryTagsRequest {
    public ListRepositoryTagsPathParams pathParams;
    public ListRepositoryTagsRequest withPathParams(ListRepositoryTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRepositoryTagsQueryParams queryParams;
    public ListRepositoryTagsRequest withQueryParams(ListRepositoryTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}