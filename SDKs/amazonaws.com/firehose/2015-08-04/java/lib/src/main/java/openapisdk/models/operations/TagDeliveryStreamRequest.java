package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagDeliveryStreamRequest {
    public TagDeliveryStreamHeaders headers;
    public TagDeliveryStreamRequest withHeaders(TagDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagDeliveryStreamInput request;
    public TagDeliveryStreamRequest withRequest(openapisdk.models.shared.TagDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}