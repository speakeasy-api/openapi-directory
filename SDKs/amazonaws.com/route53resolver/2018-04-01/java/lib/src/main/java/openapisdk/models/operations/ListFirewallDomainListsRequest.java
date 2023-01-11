package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallDomainListsRequest {
    public ListFirewallDomainListsQueryParams queryParams;
    public ListFirewallDomainListsRequest withQueryParams(ListFirewallDomainListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallDomainListsHeaders headers;
    public ListFirewallDomainListsRequest withHeaders(ListFirewallDomainListsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallDomainListsRequest request;
    public ListFirewallDomainListsRequest withRequest(openapisdk.models.shared.ListFirewallDomainListsRequest request) {
        this.request = request;
        return this;
    }
}