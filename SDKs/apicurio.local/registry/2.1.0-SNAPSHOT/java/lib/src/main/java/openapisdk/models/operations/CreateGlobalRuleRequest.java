package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlobalRuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Rule request;
    public CreateGlobalRuleRequest withRequest(openapisdk.models.shared.Rule request) {
        this.request = request;
        return this;
    }
}