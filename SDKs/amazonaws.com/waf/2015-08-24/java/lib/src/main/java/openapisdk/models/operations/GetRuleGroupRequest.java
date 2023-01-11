package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRuleGroupRequest {
    public GetRuleGroupHeaders headers;
    public GetRuleGroupRequest withHeaders(GetRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRuleGroupRequest request;
    public GetRuleGroupRequest withRequest(openapisdk.models.shared.GetRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}