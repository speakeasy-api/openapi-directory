package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirehoseLogDeliveryDescription
 * A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
**/
public class FirehoseLogDeliveryDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryStream")
    public String deliveryStream;
    public FirehoseLogDeliveryDescription withDeliveryStream(String deliveryStream) {
        this.deliveryStream = deliveryStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public FirehoseLogDeliveryDescription withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}