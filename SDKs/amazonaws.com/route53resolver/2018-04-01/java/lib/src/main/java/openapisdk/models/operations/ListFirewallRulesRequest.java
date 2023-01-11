package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallRulesRequest {
    public ListFirewallRulesQueryParams queryParams;
    public ListFirewallRulesRequest withQueryParams(ListFirewallRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallRulesHeaders headers;
    public ListFirewallRulesRequest withHeaders(ListFirewallRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallRulesRequest request;
    public ListFirewallRulesRequest withRequest(openapisdk.models.shared.ListFirewallRulesRequest request) {
        this.request = request;
        return this;
    }
}