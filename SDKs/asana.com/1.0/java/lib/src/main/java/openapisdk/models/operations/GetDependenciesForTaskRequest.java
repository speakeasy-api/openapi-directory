package openapisdk.models.operations;



public class GetDependenciesForTaskRequest {
    public GetDependenciesForTaskPathParams pathParams;
    public GetDependenciesForTaskRequest withPathParams(GetDependenciesForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDependenciesForTaskQueryParams queryParams;
    public GetDependenciesForTaskRequest withQueryParams(GetDependenciesForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}