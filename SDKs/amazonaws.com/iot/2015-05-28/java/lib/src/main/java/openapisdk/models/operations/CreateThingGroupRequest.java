package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingGroupRequest {
    public CreateThingGroupPathParams pathParams;
    public CreateThingGroupRequest withPathParams(CreateThingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateThingGroupHeaders headers;
    public CreateThingGroupRequest withHeaders(CreateThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateThingGroupRequestBody request;
    public CreateThingGroupRequest withRequest(CreateThingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}