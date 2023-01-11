package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDeliveryStreamOutput {
    @JsonProperty("DeliveryStreamDescription")
    public DeliveryStreamDescription deliveryStreamDescription;
    public DescribeDeliveryStreamOutput withDeliveryStreamDescription(DeliveryStreamDescription deliveryStreamDescription) {
        this.deliveryStreamDescription = deliveryStreamDescription;
        return this;
    }
}