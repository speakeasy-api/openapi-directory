package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateDiscoveredResourceRequest {
    public AssociateDiscoveredResourceHeaders headers;
    public AssociateDiscoveredResourceRequest withHeaders(AssociateDiscoveredResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateDiscoveredResourceRequest request;
    public AssociateDiscoveredResourceRequest withRequest(openapisdk.models.shared.AssociateDiscoveredResourceRequest request) {
        this.request = request;
        return this;
    }
}