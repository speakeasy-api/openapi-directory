package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRuleRequest {
    public GetRuleHeaders headers;
    public GetRuleRequest withHeaders(GetRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRuleRequest request;
    public GetRuleRequest withRequest(openapisdk.models.shared.GetRuleRequest request) {
        this.request = request;
        return this;
    }
}