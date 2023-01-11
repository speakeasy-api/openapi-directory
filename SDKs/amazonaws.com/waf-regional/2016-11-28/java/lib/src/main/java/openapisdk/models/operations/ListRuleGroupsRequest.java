package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRuleGroupsRequest {
    public ListRuleGroupsHeaders headers;
    public ListRuleGroupsRequest withHeaders(ListRuleGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRuleGroupsRequest request;
    public ListRuleGroupsRequest withRequest(openapisdk.models.shared.ListRuleGroupsRequest request) {
        this.request = request;
        return this;
    }
}