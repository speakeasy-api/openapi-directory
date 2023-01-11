package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateKmsKeyRequest {
    public AssociateKmsKeyHeaders headers;
    public AssociateKmsKeyRequest withHeaders(AssociateKmsKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateKmsKeyRequest request;
    public AssociateKmsKeyRequest withRequest(openapisdk.models.shared.AssociateKmsKeyRequest request) {
        this.request = request;
        return this;
    }
}