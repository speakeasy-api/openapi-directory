package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetParentForTaskRequest {
    public SetParentForTaskPathParams pathParams;
    public SetParentForTaskRequest withPathParams(SetParentForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetParentForTaskQueryParams queryParams;
    public SetParentForTaskRequest withQueryParams(SetParentForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetParentForTaskRequestBody request;
    public SetParentForTaskRequest withRequest(SetParentForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}