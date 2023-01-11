package openapisdk.models.operations;



public class GetSubtasksForTaskRequest {
    public GetSubtasksForTaskPathParams pathParams;
    public GetSubtasksForTaskRequest withPathParams(GetSubtasksForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubtasksForTaskQueryParams queryParams;
    public GetSubtasksForTaskRequest withQueryParams(GetSubtasksForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}