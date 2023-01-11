package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddProjectForTaskRequest {
    public AddProjectForTaskPathParams pathParams;
    public AddProjectForTaskRequest withPathParams(AddProjectForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddProjectForTaskQueryParams queryParams;
    public AddProjectForTaskRequest withQueryParams(AddProjectForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddProjectForTaskRequestBody request;
    public AddProjectForTaskRequest withRequest(AddProjectForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}