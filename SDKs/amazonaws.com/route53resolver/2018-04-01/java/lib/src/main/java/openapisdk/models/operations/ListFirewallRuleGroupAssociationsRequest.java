package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallRuleGroupAssociationsRequest {
    public ListFirewallRuleGroupAssociationsQueryParams queryParams;
    public ListFirewallRuleGroupAssociationsRequest withQueryParams(ListFirewallRuleGroupAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallRuleGroupAssociationsHeaders headers;
    public ListFirewallRuleGroupAssociationsRequest withHeaders(ListFirewallRuleGroupAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallRuleGroupAssociationsRequest request;
    public ListFirewallRuleGroupAssociationsRequest withRequest(openapisdk.models.shared.ListFirewallRuleGroupAssociationsRequest request) {
        this.request = request;
        return this;
    }
}