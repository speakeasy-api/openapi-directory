package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateHealthCheckRequest {
    public DisassociateHealthCheckHeaders headers;
    public DisassociateHealthCheckRequest withHeaders(DisassociateHealthCheckHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateHealthCheckRequest request;
    public DisassociateHealthCheckRequest withRequest(openapisdk.models.shared.DisassociateHealthCheckRequest request) {
        this.request = request;
        return this;
    }
}