package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigRuleRequest {
    public DeleteConfigRuleHeaders headers;
    public DeleteConfigRuleRequest withHeaders(DeleteConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConfigRuleRequest request;
    public DeleteConfigRuleRequest withRequest(openapisdk.models.shared.DeleteConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}