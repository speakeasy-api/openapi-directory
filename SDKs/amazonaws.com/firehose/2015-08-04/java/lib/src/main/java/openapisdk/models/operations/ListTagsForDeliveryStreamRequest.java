package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForDeliveryStreamRequest {
    public ListTagsForDeliveryStreamHeaders headers;
    public ListTagsForDeliveryStreamRequest withHeaders(ListTagsForDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForDeliveryStreamInput request;
    public ListTagsForDeliveryStreamRequest withRequest(openapisdk.models.shared.ListTagsForDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}