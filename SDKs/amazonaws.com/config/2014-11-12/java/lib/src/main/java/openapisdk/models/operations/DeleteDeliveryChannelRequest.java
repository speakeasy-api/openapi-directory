package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeliveryChannelRequest {
    public DeleteDeliveryChannelHeaders headers;
    public DeleteDeliveryChannelRequest withHeaders(DeleteDeliveryChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDeliveryChannelRequest request;
    public DeleteDeliveryChannelRequest withRequest(openapisdk.models.shared.DeleteDeliveryChannelRequest request) {
        this.request = request;
        return this;
    }
}