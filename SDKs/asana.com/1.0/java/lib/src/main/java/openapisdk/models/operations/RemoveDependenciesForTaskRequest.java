package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveDependenciesForTaskRequest {
    public RemoveDependenciesForTaskPathParams pathParams;
    public RemoveDependenciesForTaskRequest withPathParams(RemoveDependenciesForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveDependenciesForTaskQueryParams queryParams;
    public RemoveDependenciesForTaskRequest withQueryParams(RemoveDependenciesForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveDependenciesForTaskRequestBody request;
    public RemoveDependenciesForTaskRequest withRequest(RemoveDependenciesForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}