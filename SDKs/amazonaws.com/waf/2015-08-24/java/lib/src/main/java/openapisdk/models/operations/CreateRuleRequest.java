package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRuleRequest {
    public CreateRuleHeaders headers;
    public CreateRuleRequest withHeaders(CreateRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRuleRequest request;
    public CreateRuleRequest withRequest(openapisdk.models.shared.CreateRuleRequest request) {
        this.request = request;
        return this;
    }
}