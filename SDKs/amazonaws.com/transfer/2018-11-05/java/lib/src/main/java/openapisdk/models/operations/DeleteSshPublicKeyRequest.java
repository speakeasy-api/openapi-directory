package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSshPublicKeyRequest {
    public DeleteSshPublicKeyHeaders headers;
    public DeleteSshPublicKeyRequest withHeaders(DeleteSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSshPublicKeyRequest request;
    public DeleteSshPublicKeyRequest withRequest(openapisdk.models.shared.DeleteSshPublicKeyRequest request) {
        this.request = request;
        return this;
    }
}