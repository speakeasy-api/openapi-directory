package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionDefinitionRequest {
    public CreateSubscriptionDefinitionHeaders headers;
    public CreateSubscriptionDefinitionRequest withHeaders(CreateSubscriptionDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSubscriptionDefinitionRequestBody request;
    public CreateSubscriptionDefinitionRequest withRequest(CreateSubscriptionDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}