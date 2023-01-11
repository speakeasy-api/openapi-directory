package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallDomainListRequest {
    public CreateFirewallDomainListHeaders headers;
    public CreateFirewallDomainListRequest withHeaders(CreateFirewallDomainListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFirewallDomainListRequest request;
    public CreateFirewallDomainListRequest withRequest(openapisdk.models.shared.CreateFirewallDomainListRequest request) {
        this.request = request;
        return this;
    }
}