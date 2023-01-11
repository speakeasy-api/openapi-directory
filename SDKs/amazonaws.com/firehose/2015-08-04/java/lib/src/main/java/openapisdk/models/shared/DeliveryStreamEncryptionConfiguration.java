package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryStreamEncryptionConfiguration
 * Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. 
**/
public class DeliveryStreamEncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureDescription")
    public FailureDescription failureDescription;
    public DeliveryStreamEncryptionConfiguration withFailureDescription(FailureDescription failureDescription) {
        this.failureDescription = failureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyARN")
    public String keyARN;
    public DeliveryStreamEncryptionConfiguration withKeyArn(String keyARN) {
        this.keyARN = keyARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyType")
    public KeyTypeEnum keyType;
    public DeliveryStreamEncryptionConfiguration withKeyType(KeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DeliveryStreamEncryptionStatusEnum status;
    public DeliveryStreamEncryptionConfiguration withStatus(DeliveryStreamEncryptionStatusEnum status) {
        this.status = status;
        return this;
    }
}