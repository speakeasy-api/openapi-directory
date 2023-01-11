package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeliveryStreamRequest {
    public DeleteDeliveryStreamHeaders headers;
    public DeleteDeliveryStreamRequest withHeaders(DeleteDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDeliveryStreamInput request;
    public DeleteDeliveryStreamRequest withRequest(openapisdk.models.shared.DeleteDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}