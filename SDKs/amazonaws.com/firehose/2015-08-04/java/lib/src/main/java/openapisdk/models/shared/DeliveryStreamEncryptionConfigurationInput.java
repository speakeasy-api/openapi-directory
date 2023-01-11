package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryStreamEncryptionConfigurationInput
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
**/
public class DeliveryStreamEncryptionConfigurationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyARN")
    public String keyARN;
    public DeliveryStreamEncryptionConfigurationInput withKeyArn(String keyARN) {
        this.keyARN = keyARN;
        return this;
    }
    @JsonProperty("KeyType")
    public KeyTypeEnum keyType;
    public DeliveryStreamEncryptionConfigurationInput withKeyType(KeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
}