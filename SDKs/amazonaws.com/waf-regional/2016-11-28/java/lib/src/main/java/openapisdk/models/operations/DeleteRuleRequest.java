package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRuleRequest {
    public DeleteRuleHeaders headers;
    public DeleteRuleRequest withHeaders(DeleteRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRuleRequest request;
    public DeleteRuleRequest withRequest(openapisdk.models.shared.DeleteRuleRequest request) {
        this.request = request;
        return this;
    }
}