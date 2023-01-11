package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallPoliciesRequest {
    public ListFirewallPoliciesQueryParams queryParams;
    public ListFirewallPoliciesRequest withQueryParams(ListFirewallPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallPoliciesHeaders headers;
    public ListFirewallPoliciesRequest withHeaders(ListFirewallPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallPoliciesRequest request;
    public ListFirewallPoliciesRequest withRequest(openapisdk.models.shared.ListFirewallPoliciesRequest request) {
        this.request = request;
        return this;
    }
}