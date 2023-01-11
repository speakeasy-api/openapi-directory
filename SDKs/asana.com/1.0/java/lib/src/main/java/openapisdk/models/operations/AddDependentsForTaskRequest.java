package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDependentsForTaskRequest {
    public AddDependentsForTaskPathParams pathParams;
    public AddDependentsForTaskRequest withPathParams(AddDependentsForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddDependentsForTaskQueryParams queryParams;
    public AddDependentsForTaskRequest withQueryParams(AddDependentsForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddDependentsForTaskRequestBody request;
    public AddDependentsForTaskRequest withRequest(AddDependentsForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}