package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDiscoveredResourceRequest {
    public DisassociateDiscoveredResourceHeaders headers;
    public DisassociateDiscoveredResourceRequest withHeaders(DisassociateDiscoveredResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateDiscoveredResourceRequest request;
    public DisassociateDiscoveredResourceRequest withRequest(openapisdk.models.shared.DisassociateDiscoveredResourceRequest request) {
        this.request = request;
        return this;
    }
}