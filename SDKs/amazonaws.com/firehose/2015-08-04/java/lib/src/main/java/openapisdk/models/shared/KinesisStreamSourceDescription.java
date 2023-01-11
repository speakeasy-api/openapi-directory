package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * KinesisStreamSourceDescription
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
public class KinesisStreamSourceDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeliveryStartTimestamp")
    public OffsetDateTime deliveryStartTimestamp;
    public KinesisStreamSourceDescription withDeliveryStartTimestamp(OffsetDateTime deliveryStartTimestamp) {
        this.deliveryStartTimestamp = deliveryStartTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamARN")
    public String kinesisStreamARN;
    public KinesisStreamSourceDescription withKinesisStreamArn(String kinesisStreamARN) {
        this.kinesisStreamARN = kinesisStreamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamSourceDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}