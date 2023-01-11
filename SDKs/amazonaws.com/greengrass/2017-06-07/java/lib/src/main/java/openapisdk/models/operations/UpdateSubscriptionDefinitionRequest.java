package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionDefinitionRequest {
    public UpdateSubscriptionDefinitionPathParams pathParams;
    public UpdateSubscriptionDefinitionRequest withPathParams(UpdateSubscriptionDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSubscriptionDefinitionHeaders headers;
    public UpdateSubscriptionDefinitionRequest withHeaders(UpdateSubscriptionDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSubscriptionDefinitionRequestBody request;
    public UpdateSubscriptionDefinitionRequest withRequest(UpdateSubscriptionDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}