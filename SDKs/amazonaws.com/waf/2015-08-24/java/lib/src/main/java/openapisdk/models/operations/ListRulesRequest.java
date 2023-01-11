package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRulesRequest {
    public ListRulesHeaders headers;
    public ListRulesRequest withHeaders(ListRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRulesRequest request;
    public ListRulesRequest withRequest(openapisdk.models.shared.ListRulesRequest request) {
        this.request = request;
        return this;
    }
}