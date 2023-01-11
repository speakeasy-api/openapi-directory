package openapisdk.models.operations;



public class ActionsListWorkflowRunsForRepoRequest {
    public ActionsListWorkflowRunsForRepoPathParams pathParams;
    public ActionsListWorkflowRunsForRepoRequest withPathParams(ActionsListWorkflowRunsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActionsListWorkflowRunsForRepoQueryParams queryParams;
    public ActionsListWorkflowRunsForRepoRequest withQueryParams(ActionsListWorkflowRunsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}