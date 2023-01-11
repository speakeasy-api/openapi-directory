package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDataKeyPairRequest {
    public GenerateDataKeyPairHeaders headers;
    public GenerateDataKeyPairRequest withHeaders(GenerateDataKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDataKeyPairRequest request;
    public GenerateDataKeyPairRequest withRequest(openapisdk.models.shared.GenerateDataKeyPairRequest request) {
        this.request = request;
        return this;
    }
}