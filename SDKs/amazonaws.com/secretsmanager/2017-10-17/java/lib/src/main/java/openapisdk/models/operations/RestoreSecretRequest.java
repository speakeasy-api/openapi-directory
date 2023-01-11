package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreSecretRequest {
    public RestoreSecretHeaders headers;
    public RestoreSecretRequest withHeaders(RestoreSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreSecretRequest request;
    public RestoreSecretRequest withRequest(openapisdk.models.shared.RestoreSecretRequest request) {
        this.request = request;
        return this;
    }
}