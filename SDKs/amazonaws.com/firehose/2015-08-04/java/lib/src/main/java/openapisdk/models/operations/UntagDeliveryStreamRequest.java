package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagDeliveryStreamRequest {
    public UntagDeliveryStreamHeaders headers;
    public UntagDeliveryStreamRequest withHeaders(UntagDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagDeliveryStreamInput request;
    public UntagDeliveryStreamRequest withRequest(openapisdk.models.shared.UntagDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}