package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRuleGroupRequest {
    public CreateRuleGroupHeaders headers;
    public CreateRuleGroupRequest withHeaders(CreateRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRuleGroupRequest request;
    public CreateRuleGroupRequest withRequest(openapisdk.models.shared.CreateRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}