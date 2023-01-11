package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProfilingGroupRequest {
    public CreateProfilingGroupQueryParams queryParams;
    public CreateProfilingGroupRequest withQueryParams(CreateProfilingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateProfilingGroupHeaders headers;
    public CreateProfilingGroupRequest withHeaders(CreateProfilingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProfilingGroupRequestBody request;
    public CreateProfilingGroupRequest withRequest(CreateProfilingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}