package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateConnectorRequest {
    public DisassociateConnectorHeaders headers;
    public DisassociateConnectorRequest withHeaders(DisassociateConnectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateConnectorRequest request;
    public DisassociateConnectorRequest withRequest(openapisdk.models.shared.DisassociateConnectorRequest request) {
        this.request = request;
        return this;
    }
}