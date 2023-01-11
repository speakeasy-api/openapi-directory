package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DuplicateTaskRequest {
    public DuplicateTaskPathParams pathParams;
    public DuplicateTaskRequest withPathParams(DuplicateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DuplicateTaskQueryParams queryParams;
    public DuplicateTaskRequest withQueryParams(DuplicateTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DuplicateTaskRequestBody request;
    public DuplicateTaskRequest withRequest(DuplicateTaskRequestBody request) {
        this.request = request;
        return this;
    }
}