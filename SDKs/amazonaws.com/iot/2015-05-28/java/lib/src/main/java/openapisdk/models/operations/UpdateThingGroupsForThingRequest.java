package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingGroupsForThingRequest {
    public UpdateThingGroupsForThingHeaders headers;
    public UpdateThingGroupsForThingRequest withHeaders(UpdateThingGroupsForThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateThingGroupsForThingRequestBody request;
    public UpdateThingGroupsForThingRequest withRequest(UpdateThingGroupsForThingRequestBody request) {
        this.request = request;
        return this;
    }
}