package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveDependentsForTaskRequest {
    public RemoveDependentsForTaskPathParams pathParams;
    public RemoveDependentsForTaskRequest withPathParams(RemoveDependentsForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveDependentsForTaskQueryParams queryParams;
    public RemoveDependentsForTaskRequest withQueryParams(RemoveDependentsForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveDependentsForTaskRequestBody request;
    public RemoveDependentsForTaskRequest withRequest(RemoveDependentsForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}