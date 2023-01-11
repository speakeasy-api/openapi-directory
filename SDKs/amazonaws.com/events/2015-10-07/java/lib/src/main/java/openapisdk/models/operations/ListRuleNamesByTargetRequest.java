package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRuleNamesByTargetRequest {
    public ListRuleNamesByTargetHeaders headers;
    public ListRuleNamesByTargetRequest withHeaders(ListRuleNamesByTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRuleNamesByTargetRequest request;
    public ListRuleNamesByTargetRequest withRequest(openapisdk.models.shared.ListRuleNamesByTargetRequest request) {
        this.request = request;
        return this;
    }
}