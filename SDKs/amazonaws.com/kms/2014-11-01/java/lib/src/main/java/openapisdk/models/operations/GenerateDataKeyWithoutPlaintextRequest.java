package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDataKeyWithoutPlaintextRequest {
    public GenerateDataKeyWithoutPlaintextHeaders headers;
    public GenerateDataKeyWithoutPlaintextRequest withHeaders(GenerateDataKeyWithoutPlaintextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDataKeyWithoutPlaintextRequest request;
    public GenerateDataKeyWithoutPlaintextRequest withRequest(openapisdk.models.shared.GenerateDataKeyWithoutPlaintextRequest request) {
        this.request = request;
        return this;
    }
}