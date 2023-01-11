package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalRuleConfigRequest {
    public UpdateGlobalRuleConfigPathParams pathParams;
    public UpdateGlobalRuleConfigRequest withPathParams(UpdateGlobalRuleConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Rule request;
    public UpdateGlobalRuleConfigRequest withRequest(openapisdk.models.shared.Rule request) {
        this.request = request;
        return this;
    }
}