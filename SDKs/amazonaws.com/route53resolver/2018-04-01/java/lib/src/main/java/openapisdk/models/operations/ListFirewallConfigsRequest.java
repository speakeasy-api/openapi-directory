package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallConfigsRequest {
    public ListFirewallConfigsQueryParams queryParams;
    public ListFirewallConfigsRequest withQueryParams(ListFirewallConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallConfigsHeaders headers;
    public ListFirewallConfigsRequest withHeaders(ListFirewallConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallConfigsRequest request;
    public ListFirewallConfigsRequest withRequest(openapisdk.models.shared.ListFirewallConfigsRequest request) {
        this.request = request;
        return this;
    }
}