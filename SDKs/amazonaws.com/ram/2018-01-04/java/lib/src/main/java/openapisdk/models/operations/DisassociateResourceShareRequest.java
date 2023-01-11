package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResourceShareRequest {
    public DisassociateResourceShareHeaders headers;
    public DisassociateResourceShareRequest withHeaders(DisassociateResourceShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateResourceShareRequestBody request;
    public DisassociateResourceShareRequest withRequest(DisassociateResourceShareRequestBody request) {
        this.request = request;
        return this;
    }
}