package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveThingFromBillingGroupRequest {
    public RemoveThingFromBillingGroupHeaders headers;
    public RemoveThingFromBillingGroupRequest withHeaders(RemoveThingFromBillingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveThingFromBillingGroupRequestBody request;
    public RemoveThingFromBillingGroupRequest withRequest(RemoveThingFromBillingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}