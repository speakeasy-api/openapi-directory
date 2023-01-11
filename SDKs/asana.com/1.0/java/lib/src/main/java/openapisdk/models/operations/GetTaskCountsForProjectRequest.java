package openapisdk.models.operations;



public class GetTaskCountsForProjectRequest {
    public GetTaskCountsForProjectPathParams pathParams;
    public GetTaskCountsForProjectRequest withPathParams(GetTaskCountsForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaskCountsForProjectQueryParams queryParams;
    public GetTaskCountsForProjectRequest withQueryParams(GetTaskCountsForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}