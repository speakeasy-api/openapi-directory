package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportFirewallDomainsRequest {
    public ImportFirewallDomainsHeaders headers;
    public ImportFirewallDomainsRequest withHeaders(ImportFirewallDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportFirewallDomainsRequest request;
    public ImportFirewallDomainsRequest withRequest(openapisdk.models.shared.ImportFirewallDomainsRequest request) {
        this.request = request;
        return this;
    }
}