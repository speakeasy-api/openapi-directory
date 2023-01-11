package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendSerialConsoleSshPublicKeyRequest {
    public SendSerialConsoleSshPublicKeyHeaders headers;
    public SendSerialConsoleSshPublicKeyRequest withHeaders(SendSerialConsoleSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendSerialConsoleSshPublicKeyRequest request;
    public SendSerialConsoleSshPublicKeyRequest withRequest(openapisdk.models.shared.SendSerialConsoleSshPublicKeyRequest request) {
        this.request = request;
        return this;
    }
}