package openapisdk.models.operations;



public class GetTagsForTaskRequest {
    public GetTagsForTaskPathParams pathParams;
    public GetTagsForTaskRequest withPathParams(GetTagsForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTagsForTaskQueryParams queryParams;
    public GetTagsForTaskRequest withQueryParams(GetTagsForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}