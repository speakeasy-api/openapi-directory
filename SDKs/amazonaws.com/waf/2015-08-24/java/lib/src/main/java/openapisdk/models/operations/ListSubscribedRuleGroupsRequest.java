package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscribedRuleGroupsRequest {
    public ListSubscribedRuleGroupsHeaders headers;
    public ListSubscribedRuleGroupsRequest withHeaders(ListSubscribedRuleGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSubscribedRuleGroupsRequest request;
    public ListSubscribedRuleGroupsRequest withRequest(openapisdk.models.shared.ListSubscribedRuleGroupsRequest request) {
        this.request = request;
        return this;
    }
}