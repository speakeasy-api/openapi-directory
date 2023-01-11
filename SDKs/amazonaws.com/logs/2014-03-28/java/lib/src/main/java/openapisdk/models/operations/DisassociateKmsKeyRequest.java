package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateKmsKeyRequest {
    public DisassociateKmsKeyHeaders headers;
    public DisassociateKmsKeyRequest withHeaders(DisassociateKmsKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateKmsKeyRequest request;
    public DisassociateKmsKeyRequest withRequest(openapisdk.models.shared.DisassociateKmsKeyRequest request) {
        this.request = request;
        return this;
    }
}