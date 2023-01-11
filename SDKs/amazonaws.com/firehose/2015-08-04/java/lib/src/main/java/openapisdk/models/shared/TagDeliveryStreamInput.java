package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagDeliveryStreamInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public TagDeliveryStreamInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagDeliveryStreamInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}