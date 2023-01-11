package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKeyPairRequest {
    public DeleteKeyPairHeaders headers;
    public DeleteKeyPairRequest withHeaders(DeleteKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteKeyPairRequest request;
    public DeleteKeyPairRequest withRequest(openapisdk.models.shared.DeleteKeyPairRequest request) {
        this.request = request;
        return this;
    }
}