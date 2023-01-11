package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateWebAclRequest {
    public DisassociateWebAclHeaders headers;
    public DisassociateWebAclRequest withHeaders(DisassociateWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateWebAclRequest request;
    public DisassociateWebAclRequest withRequest(openapisdk.models.shared.DisassociateWebAclRequest request) {
        this.request = request;
        return this;
    }
}