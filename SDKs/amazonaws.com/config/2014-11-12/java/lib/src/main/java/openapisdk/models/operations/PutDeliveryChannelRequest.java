package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDeliveryChannelRequest {
    public PutDeliveryChannelHeaders headers;
    public PutDeliveryChannelRequest withHeaders(PutDeliveryChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDeliveryChannelRequest request;
    public PutDeliveryChannelRequest withRequest(openapisdk.models.shared.PutDeliveryChannelRequest request) {
        this.request = request;
        return this;
    }
}