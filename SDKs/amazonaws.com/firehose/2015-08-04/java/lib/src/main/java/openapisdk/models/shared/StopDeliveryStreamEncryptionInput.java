package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopDeliveryStreamEncryptionInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public StopDeliveryStreamEncryptionInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
}