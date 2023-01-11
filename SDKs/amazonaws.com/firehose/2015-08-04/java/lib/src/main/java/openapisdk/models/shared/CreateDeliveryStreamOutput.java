package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeliveryStreamOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryStreamARN")
    public String deliveryStreamARN;
    public CreateDeliveryStreamOutput withDeliveryStreamArn(String deliveryStreamARN) {
        this.deliveryStreamARN = deliveryStreamARN;
        return this;
    }
}