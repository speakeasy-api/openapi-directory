package openapisdk.models.operations;



public class DeleteGoalRequest {
    public DeleteGoalPathParams pathParams;
    public DeleteGoalRequest withPathParams(DeleteGoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteGoalQueryParams queryParams;
    public DeleteGoalRequest withQueryParams(DeleteGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}