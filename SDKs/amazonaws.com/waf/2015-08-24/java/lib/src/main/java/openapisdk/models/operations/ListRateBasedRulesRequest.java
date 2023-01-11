package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRateBasedRulesRequest {
    public ListRateBasedRulesHeaders headers;
    public ListRateBasedRulesRequest withHeaders(ListRateBasedRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRateBasedRulesRequest request;
    public ListRateBasedRulesRequest withRequest(openapisdk.models.shared.ListRateBasedRulesRequest request) {
        this.request = request;
        return this;
    }
}