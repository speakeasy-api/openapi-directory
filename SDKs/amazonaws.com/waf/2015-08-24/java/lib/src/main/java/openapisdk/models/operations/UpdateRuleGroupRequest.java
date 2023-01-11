package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuleGroupRequest {
    public UpdateRuleGroupHeaders headers;
    public UpdateRuleGroupRequest withHeaders(UpdateRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRuleGroupRequest request;
    public UpdateRuleGroupRequest withRequest(openapisdk.models.shared.UpdateRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}