package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallRuleGroupsRequest {
    public ListFirewallRuleGroupsQueryParams queryParams;
    public ListFirewallRuleGroupsRequest withQueryParams(ListFirewallRuleGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallRuleGroupsHeaders headers;
    public ListFirewallRuleGroupsRequest withHeaders(ListFirewallRuleGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallRuleGroupsRequest request;
    public ListFirewallRuleGroupsRequest withRequest(openapisdk.models.shared.ListFirewallRuleGroupsRequest request) {
        this.request = request;
        return this;
    }
}