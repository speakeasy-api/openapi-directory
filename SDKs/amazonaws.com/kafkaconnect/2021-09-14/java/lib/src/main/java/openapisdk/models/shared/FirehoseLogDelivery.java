package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirehoseLogDelivery
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
**/
public class FirehoseLogDelivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryStream")
    public String deliveryStream;
    public FirehoseLogDelivery withDeliveryStream(String deliveryStream) {
        this.deliveryStream = deliveryStream;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public FirehoseLogDelivery withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}