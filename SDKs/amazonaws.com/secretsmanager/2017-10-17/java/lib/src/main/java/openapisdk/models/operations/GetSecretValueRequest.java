package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecretValueRequest {
    public GetSecretValueHeaders headers;
    public GetSecretValueRequest withHeaders(GetSecretValueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSecretValueRequest request;
    public GetSecretValueRequest withRequest(openapisdk.models.shared.GetSecretValueRequest request) {
        this.request = request;
        return this;
    }
}