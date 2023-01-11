package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisAction
 * Describes an action to write data to an Amazon Kinesis stream.
**/
public class KinesisAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionKey")
    public String partitionKey;
    public KinesisAction withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public KinesisAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("streamName")
    public String streamName;
    public KinesisAction withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}