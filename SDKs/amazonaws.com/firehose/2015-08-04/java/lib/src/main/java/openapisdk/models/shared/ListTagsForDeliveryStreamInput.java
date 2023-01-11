package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagsForDeliveryStreamInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public ListTagsForDeliveryStreamInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartTagKey")
    public String exclusiveStartTagKey;
    public ListTagsForDeliveryStreamInput withExclusiveStartTagKey(String exclusiveStartTagKey) {
        this.exclusiveStartTagKey = exclusiveStartTagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListTagsForDeliveryStreamInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}