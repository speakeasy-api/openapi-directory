package openapisdk.models.operations;



public class GetGoalRequest {
    public GetGoalPathParams pathParams;
    public GetGoalRequest withPathParams(GetGoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGoalQueryParams queryParams;
    public GetGoalRequest withQueryParams(GetGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}