package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallDomainListRequest {
    public GetFirewallDomainListHeaders headers;
    public GetFirewallDomainListRequest withHeaders(GetFirewallDomainListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFirewallDomainListRequest request;
    public GetFirewallDomainListRequest withRequest(openapisdk.models.shared.GetFirewallDomainListRequest request) {
        this.request = request;
        return this;
    }
}