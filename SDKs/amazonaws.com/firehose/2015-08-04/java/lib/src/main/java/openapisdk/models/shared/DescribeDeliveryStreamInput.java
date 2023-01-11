package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDeliveryStreamInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public DescribeDeliveryStreamInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartDestinationId")
    public String exclusiveStartDestinationId;
    public DescribeDeliveryStreamInput withExclusiveStartDestinationId(String exclusiveStartDestinationId) {
        this.exclusiveStartDestinationId = exclusiveStartDestinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeDeliveryStreamInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}