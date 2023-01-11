package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateConnectionFromLagRequest {
    public DisassociateConnectionFromLagHeaders headers;
    public DisassociateConnectionFromLagRequest withHeaders(DisassociateConnectionFromLagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateConnectionFromLagRequest request;
    public DisassociateConnectionFromLagRequest withRequest(openapisdk.models.shared.DisassociateConnectionFromLagRequest request) {
        this.request = request;
        return this;
    }
}