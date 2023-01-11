package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateSubnetsRequest {
    public DisassociateSubnetsHeaders headers;
    public DisassociateSubnetsRequest withHeaders(DisassociateSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateSubnetsRequest request;
    public DisassociateSubnetsRequest withRequest(openapisdk.models.shared.DisassociateSubnetsRequest request) {
        this.request = request;
        return this;
    }
}