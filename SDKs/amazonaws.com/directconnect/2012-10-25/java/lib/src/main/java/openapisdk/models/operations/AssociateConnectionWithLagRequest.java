package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateConnectionWithLagRequest {
    public AssociateConnectionWithLagHeaders headers;
    public AssociateConnectionWithLagRequest withHeaders(AssociateConnectionWithLagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateConnectionWithLagRequest request;
    public AssociateConnectionWithLagRequest withRequest(openapisdk.models.shared.AssociateConnectionWithLagRequest request) {
        this.request = request;
        return this;
    }
}