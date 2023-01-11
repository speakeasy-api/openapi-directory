package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallDomainsRequest {
    public UpdateFirewallDomainsHeaders headers;
    public UpdateFirewallDomainsRequest withHeaders(UpdateFirewallDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallDomainsRequest request;
    public UpdateFirewallDomainsRequest withRequest(openapisdk.models.shared.UpdateFirewallDomainsRequest request) {
        this.request = request;
        return this;
    }
}