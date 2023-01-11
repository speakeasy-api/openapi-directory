package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyEventSubscriptionRequest {
    public ModifyEventSubscriptionHeaders headers;
    public ModifyEventSubscriptionRequest withHeaders(ModifyEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyEventSubscriptionMessage request;
    public ModifyEventSubscriptionRequest withRequest(openapisdk.models.shared.ModifyEventSubscriptionMessage request) {
        this.request = request;
        return this;
    }
}