package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEncryptionConfigRequest {
    public PutEncryptionConfigHeaders headers;
    public PutEncryptionConfigRequest withHeaders(PutEncryptionConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEncryptionConfigRequestBody request;
    public PutEncryptionConfigRequest withRequest(PutEncryptionConfigRequestBody request) {
        this.request = request;
        return this;
    }
}