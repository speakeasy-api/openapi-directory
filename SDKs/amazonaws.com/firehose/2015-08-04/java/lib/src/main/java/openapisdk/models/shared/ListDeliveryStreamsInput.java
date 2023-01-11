package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeliveryStreamsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryStreamType")
    public DeliveryStreamTypeEnum deliveryStreamType;
    public ListDeliveryStreamsInput withDeliveryStreamType(DeliveryStreamTypeEnum deliveryStreamType) {
        this.deliveryStreamType = deliveryStreamType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartDeliveryStreamName")
    public String exclusiveStartDeliveryStreamName;
    public ListDeliveryStreamsInput withExclusiveStartDeliveryStreamName(String exclusiveStartDeliveryStreamName) {
        this.exclusiveStartDeliveryStreamName = exclusiveStartDeliveryStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListDeliveryStreamsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}