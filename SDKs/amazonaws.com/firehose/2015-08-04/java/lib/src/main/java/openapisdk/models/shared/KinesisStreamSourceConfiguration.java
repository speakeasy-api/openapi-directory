package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamSourceConfiguration
 * The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
**/
public class KinesisStreamSourceConfiguration {
    @JsonProperty("KinesisStreamARN")
    public String kinesisStreamARN;
    public KinesisStreamSourceConfiguration withKinesisStreamArn(String kinesisStreamARN) {
        this.kinesisStreamARN = kinesisStreamARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamSourceConfiguration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}