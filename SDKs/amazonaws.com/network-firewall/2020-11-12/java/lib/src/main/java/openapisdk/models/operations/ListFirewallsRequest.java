package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFirewallsRequest {
    public ListFirewallsQueryParams queryParams;
    public ListFirewallsRequest withQueryParams(ListFirewallsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallsHeaders headers;
    public ListFirewallsRequest withHeaders(ListFirewallsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFirewallsRequest request;
    public ListFirewallsRequest withRequest(openapisdk.models.shared.ListFirewallsRequest request) {
        this.request = request;
        return this;
    }
}