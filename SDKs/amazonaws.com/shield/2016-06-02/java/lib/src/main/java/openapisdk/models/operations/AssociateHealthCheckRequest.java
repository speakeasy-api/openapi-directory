package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateHealthCheckRequest {
    public AssociateHealthCheckHeaders headers;
    public AssociateHealthCheckRequest withHeaders(AssociateHealthCheckHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateHealthCheckRequest request;
    public AssociateHealthCheckRequest withRequest(openapisdk.models.shared.AssociateHealthCheckRequest request) {
        this.request = request;
        return this;
    }
}