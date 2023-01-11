package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionDefinitionVersionRequest {
    public CreateSubscriptionDefinitionVersionPathParams pathParams;
    public CreateSubscriptionDefinitionVersionRequest withPathParams(CreateSubscriptionDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSubscriptionDefinitionVersionHeaders headers;
    public CreateSubscriptionDefinitionVersionRequest withHeaders(CreateSubscriptionDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSubscriptionDefinitionVersionRequestBody request;
    public CreateSubscriptionDefinitionVersionRequest withRequest(CreateSubscriptionDefinitionVersionRequestBody request) {
        this.request = request;
        return this;
    }
}