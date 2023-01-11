package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateTagOptionFromResourceRequest {
    public DisassociateTagOptionFromResourceHeaders headers;
    public DisassociateTagOptionFromResourceRequest withHeaders(DisassociateTagOptionFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateTagOptionFromResourceInput request;
    public DisassociateTagOptionFromResourceRequest withRequest(openapisdk.models.shared.DisassociateTagOptionFromResourceInput request) {
        this.request = request;
        return this;
    }
}