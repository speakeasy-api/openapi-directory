package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDataKeyPairWithoutPlaintextRequest {
    public GenerateDataKeyPairWithoutPlaintextHeaders headers;
    public GenerateDataKeyPairWithoutPlaintextRequest withHeaders(GenerateDataKeyPairWithoutPlaintextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDataKeyPairWithoutPlaintextRequest request;
    public GenerateDataKeyPairWithoutPlaintextRequest withRequest(openapisdk.models.shared.GenerateDataKeyPairWithoutPlaintextRequest request) {
        this.request = request;
        return this;
    }
}