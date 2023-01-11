package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowerForTaskRequest {
    public RemoveFollowerForTaskPathParams pathParams;
    public RemoveFollowerForTaskRequest withPathParams(RemoveFollowerForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveFollowerForTaskQueryParams queryParams;
    public RemoveFollowerForTaskRequest withQueryParams(RemoveFollowerForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveFollowerForTaskRequestBody request;
    public RemoveFollowerForTaskRequest withRequest(RemoveFollowerForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}