package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveProjectForTaskRequest {
    public RemoveProjectForTaskPathParams pathParams;
    public RemoveProjectForTaskRequest withPathParams(RemoveProjectForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveProjectForTaskQueryParams queryParams;
    public RemoveProjectForTaskRequest withQueryParams(RemoveProjectForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveProjectForTaskRequestBody request;
    public RemoveProjectForTaskRequest withRequest(RemoveProjectForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}