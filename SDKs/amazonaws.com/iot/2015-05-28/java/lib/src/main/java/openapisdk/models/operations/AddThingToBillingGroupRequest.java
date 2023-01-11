package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddThingToBillingGroupRequest {
    public AddThingToBillingGroupHeaders headers;
    public AddThingToBillingGroupRequest withHeaders(AddThingToBillingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddThingToBillingGroupRequestBody request;
    public AddThingToBillingGroupRequest withRequest(AddThingToBillingGroupRequestBody request) {
        this.request = request;
        return this;
    }
}