package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagDeliveryStreamInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public UntagDeliveryStreamInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagDeliveryStreamInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}