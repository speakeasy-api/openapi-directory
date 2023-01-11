package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateNodeRequest {
    public DisassociateNodeHeaders headers;
    public DisassociateNodeRequest withHeaders(DisassociateNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateNodeRequest request;
    public DisassociateNodeRequest withRequest(openapisdk.models.shared.DisassociateNodeRequest request) {
        this.request = request;
        return this;
    }
}