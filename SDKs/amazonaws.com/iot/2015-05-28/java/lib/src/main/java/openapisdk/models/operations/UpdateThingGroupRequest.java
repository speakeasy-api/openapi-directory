package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingGroupRequest {
    public UpdateThingGroupPathParams pathParams;
    public UpdateThingGroupRequest withPathParams(UpdateThingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateThingGroupHeaders headers;
    public UpdateThingGroupRequest withHeaders(UpdateThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateThingGroupRequestBody request;
    public UpdateThingGroupRequest withRequest(UpdateThingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}