package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTargetsByRuleRequest {
    public ListTargetsByRuleHeaders headers;
    public ListTargetsByRuleRequest withHeaders(ListTargetsByRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTargetsByRuleRequest request;
    public ListTargetsByRuleRequest withRequest(openapisdk.models.shared.ListTargetsByRuleRequest request) {
        this.request = request;
        return this;
    }
}