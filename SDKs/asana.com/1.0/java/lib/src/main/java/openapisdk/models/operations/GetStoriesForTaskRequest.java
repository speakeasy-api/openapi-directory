package openapisdk.models.operations;



public class GetStoriesForTaskRequest {
    public GetStoriesForTaskPathParams pathParams;
    public GetStoriesForTaskRequest withPathParams(GetStoriesForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStoriesForTaskQueryParams queryParams;
    public GetStoriesForTaskRequest withQueryParams(GetStoriesForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}