package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDefaultEncryptionConfigurationRequest {
    public PutDefaultEncryptionConfigurationHeaders headers;
    public PutDefaultEncryptionConfigurationRequest withHeaders(PutDefaultEncryptionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutDefaultEncryptionConfigurationRequestBody request;
    public PutDefaultEncryptionConfigurationRequest withRequest(PutDefaultEncryptionConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}