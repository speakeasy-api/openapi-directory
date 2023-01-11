package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRuleRequest {
    public CreateRulePathParams pathParams;
    public CreateRuleRequest withPathParams(CreateRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRuleRequest request;
    public CreateRuleRequest withRequest(openapisdk.models.shared.CreateRuleRequest request) {
        this.request = request;
        return this;
    }
}