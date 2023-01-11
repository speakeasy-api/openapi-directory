package openapisdk.models.operations;



public class GetDependentsForTaskRequest {
    public GetDependentsForTaskPathParams pathParams;
    public GetDependentsForTaskRequest withPathParams(GetDependentsForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDependentsForTaskQueryParams queryParams;
    public GetDependentsForTaskRequest withQueryParams(GetDependentsForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}