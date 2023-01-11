package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeliveryStreamRequest {
    public CreateDeliveryStreamHeaders headers;
    public CreateDeliveryStreamRequest withHeaders(CreateDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDeliveryStreamInput request;
    public CreateDeliveryStreamRequest withRequest(openapisdk.models.shared.CreateDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}