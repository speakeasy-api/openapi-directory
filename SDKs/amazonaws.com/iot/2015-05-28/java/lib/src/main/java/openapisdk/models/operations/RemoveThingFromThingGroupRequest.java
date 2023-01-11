package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveThingFromThingGroupRequest {
    public RemoveThingFromThingGroupHeaders headers;
    public RemoveThingFromThingGroupRequest withHeaders(RemoveThingFromThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveThingFromThingGroupRequestBody request;
    public RemoveThingFromThingGroupRequest withRequest(RemoveThingFromThingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}