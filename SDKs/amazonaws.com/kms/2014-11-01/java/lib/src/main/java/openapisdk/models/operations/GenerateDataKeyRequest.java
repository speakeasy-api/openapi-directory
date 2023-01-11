package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDataKeyRequest {
    public GenerateDataKeyHeaders headers;
    public GenerateDataKeyRequest withHeaders(GenerateDataKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDataKeyRequest request;
    public GenerateDataKeyRequest withRequest(openapisdk.models.shared.GenerateDataKeyRequest request) {
        this.request = request;
        return this;
    }
}