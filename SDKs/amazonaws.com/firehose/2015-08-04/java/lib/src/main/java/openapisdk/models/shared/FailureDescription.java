package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FailureDescription
 * Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
**/
public class FailureDescription {
    @JsonProperty("Details")
    public String details;
    public FailureDescription withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonProperty("Type")
    public DeliveryStreamFailureTypeEnum type;
    public FailureDescription withType(DeliveryStreamFailureTypeEnum type) {
        this.type = type;
        return this;
    }
}