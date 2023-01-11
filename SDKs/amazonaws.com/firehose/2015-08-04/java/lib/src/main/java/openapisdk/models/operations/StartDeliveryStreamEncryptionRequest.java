package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDeliveryStreamEncryptionRequest {
    public StartDeliveryStreamEncryptionHeaders headers;
    public StartDeliveryStreamEncryptionRequest withHeaders(StartDeliveryStreamEncryptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDeliveryStreamEncryptionInput request;
    public StartDeliveryStreamEncryptionRequest withRequest(openapisdk.models.shared.StartDeliveryStreamEncryptionInput request) {
        this.request = request;
        return this;
    }
}