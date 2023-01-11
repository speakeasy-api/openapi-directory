package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDeliveryStreamEncryptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryStreamEncryptionConfigurationInput")
    public DeliveryStreamEncryptionConfigurationInput deliveryStreamEncryptionConfigurationInput;
    public StartDeliveryStreamEncryptionInput withDeliveryStreamEncryptionConfigurationInput(DeliveryStreamEncryptionConfigurationInput deliveryStreamEncryptionConfigurationInput) {
        this.deliveryStreamEncryptionConfigurationInput = deliveryStreamEncryptionConfigurationInput;
        return this;
    }
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public StartDeliveryStreamEncryptionInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
}