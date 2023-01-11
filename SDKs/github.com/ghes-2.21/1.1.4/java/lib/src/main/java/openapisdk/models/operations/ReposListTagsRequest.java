package openapisdk.models.operations;



public class ReposListTagsRequest {
    public ReposListTagsPathParams pathParams;
    public ReposListTagsRequest withPathParams(ReposListTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListTagsQueryParams queryParams;
    public ReposListTagsRequest withQueryParams(ReposListTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}