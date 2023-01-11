package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallDomainListRequest {
    public DeleteFirewallDomainListHeaders headers;
    public DeleteFirewallDomainListRequest withHeaders(DeleteFirewallDomainListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFirewallDomainListRequest request;
    public DeleteFirewallDomainListRequest withRequest(openapisdk.models.shared.DeleteFirewallDomainListRequest request) {
        this.request = request;
        return this;
    }
}