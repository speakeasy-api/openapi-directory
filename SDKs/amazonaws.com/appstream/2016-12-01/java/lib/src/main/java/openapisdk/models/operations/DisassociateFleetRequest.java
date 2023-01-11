package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateFleetRequest {
    public DisassociateFleetHeaders headers;
    public DisassociateFleetRequest withHeaders(DisassociateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateFleetRequest request;
    public DisassociateFleetRequest withRequest(openapisdk.models.shared.DisassociateFleetRequest request) {
        this.request = request;
        return this;
    }
}