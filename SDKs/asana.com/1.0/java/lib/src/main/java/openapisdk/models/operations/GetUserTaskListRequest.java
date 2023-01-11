package openapisdk.models.operations;



public class GetUserTaskListRequest {
    public GetUserTaskListPathParams pathParams;
    public GetUserTaskListRequest withPathParams(GetUserTaskListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserTaskListQueryParams queryParams;
    public GetUserTaskListRequest withQueryParams(GetUserTaskListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}