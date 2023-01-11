package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeServerLifeCycleStateRequest {
    public ChangeServerLifeCycleStateHeaders headers;
    public ChangeServerLifeCycleStateRequest withHeaders(ChangeServerLifeCycleStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeServerLifeCycleStateRequestBody request;
    public ChangeServerLifeCycleStateRequest withRequest(ChangeServerLifeCycleStateRequestBody request) {
        this.request = request;
        return this;
    }
}