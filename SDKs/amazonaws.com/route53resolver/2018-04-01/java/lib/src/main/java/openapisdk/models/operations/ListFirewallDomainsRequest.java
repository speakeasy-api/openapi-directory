package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallDomainsRequest {
    public ListFirewallDomainsQueryParams queryParams;
    public ListFirewallDomainsRequest withQueryParams(ListFirewallDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallDomainsHeaders headers;
    public ListFirewallDomainsRequest withHeaders(ListFirewallDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallDomainsRequest request;
    public ListFirewallDomainsRequest withRequest(openapisdk.models.shared.ListFirewallDomainsRequest request) {
        this.request = request;
        return this;
    }
}