package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendSshPublicKeyRequest {
    public SendSshPublicKeyHeaders headers;
    public SendSshPublicKeyRequest withHeaders(SendSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendSshPublicKeyRequest request;
    public SendSshPublicKeyRequest withRequest(openapisdk.models.shared.SendSshPublicKeyRequest request) {
        this.request = request;
        return this;
    }
}