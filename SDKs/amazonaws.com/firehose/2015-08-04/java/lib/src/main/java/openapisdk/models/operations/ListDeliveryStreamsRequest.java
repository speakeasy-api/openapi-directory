package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeliveryStreamsRequest {
    public ListDeliveryStreamsHeaders headers;
    public ListDeliveryStreamsRequest withHeaders(ListDeliveryStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeliveryStreamsInput request;
    public ListDeliveryStreamsRequest withRequest(openapisdk.models.shared.ListDeliveryStreamsInput request) {
        this.request = request;
        return this;
    }
}