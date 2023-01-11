package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDependenciesForTaskRequest {
    public AddDependenciesForTaskPathParams pathParams;
    public AddDependenciesForTaskRequest withPathParams(AddDependenciesForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddDependenciesForTaskQueryParams queryParams;
    public AddDependenciesForTaskRequest withQueryParams(AddDependenciesForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddDependenciesForTaskRequestBody request;
    public AddDependenciesForTaskRequest withRequest(AddDependenciesForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}