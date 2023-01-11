package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRuleGroupRequest {
    public DeleteRuleGroupHeaders headers;
    public DeleteRuleGroupRequest withHeaders(DeleteRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRuleGroupRequest request;
    public DeleteRuleGroupRequest withRequest(openapisdk.models.shared.DeleteRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}