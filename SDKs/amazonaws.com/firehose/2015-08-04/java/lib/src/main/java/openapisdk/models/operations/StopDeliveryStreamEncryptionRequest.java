package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopDeliveryStreamEncryptionRequest {
    public StopDeliveryStreamEncryptionHeaders headers;
    public StopDeliveryStreamEncryptionRequest withHeaders(StopDeliveryStreamEncryptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopDeliveryStreamEncryptionInput request;
    public StopDeliveryStreamEncryptionRequest withRequest(openapisdk.models.shared.StopDeliveryStreamEncryptionInput request) {
        this.request = request;
        return this;
    }
}