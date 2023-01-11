package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuleRequest {
    public UpdateRuleHeaders headers;
    public UpdateRuleRequest withHeaders(UpdateRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRuleRequest request;
    public UpdateRuleRequest withRequest(openapisdk.models.shared.UpdateRuleRequest request) {
        this.request = request;
        return this;
    }
}