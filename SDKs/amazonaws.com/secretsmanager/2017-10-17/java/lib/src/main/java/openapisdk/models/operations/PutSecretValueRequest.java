package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSecretValueRequest {
    public PutSecretValueHeaders headers;
    public PutSecretValueRequest withHeaders(PutSecretValueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSecretValueRequest request;
    public PutSecretValueRequest withRequest(openapisdk.models.shared.PutSecretValueRequest request) {
        this.request = request;
        return this;
    }
}