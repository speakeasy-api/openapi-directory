package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProfilingGroupRequest {
    public UpdateProfilingGroupPathParams pathParams;
    public UpdateProfilingGroupRequest withPathParams(UpdateProfilingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProfilingGroupHeaders headers;
    public UpdateProfilingGroupRequest withHeaders(UpdateProfilingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateProfilingGroupRequestBody request;
    public UpdateProfilingGroupRequest withRequest(UpdateProfilingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}