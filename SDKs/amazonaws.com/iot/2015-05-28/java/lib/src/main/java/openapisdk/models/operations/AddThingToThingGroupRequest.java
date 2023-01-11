package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddThingToThingGroupRequest {
    public AddThingToThingGroupHeaders headers;
    public AddThingToThingGroupRequest withHeaders(AddThingToThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddThingToThingGroupRequestBody request;
    public AddThingToThingGroupRequest withRequest(AddThingToThingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}