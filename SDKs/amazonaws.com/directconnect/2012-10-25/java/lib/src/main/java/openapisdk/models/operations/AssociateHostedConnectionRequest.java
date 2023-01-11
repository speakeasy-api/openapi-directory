package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateHostedConnectionRequest {
    public AssociateHostedConnectionHeaders headers;
    public AssociateHostedConnectionRequest withHeaders(AssociateHostedConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateHostedConnectionRequest request;
    public AssociateHostedConnectionRequest withRequest(openapisdk.models.shared.AssociateHostedConnectionRequest request) {
        this.request = request;
        return this;
    }
}