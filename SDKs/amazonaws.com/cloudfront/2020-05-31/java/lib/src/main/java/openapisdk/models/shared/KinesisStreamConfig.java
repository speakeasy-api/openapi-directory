package openapisdk.models.shared;



/**
 * KinesisStreamConfig
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
**/
public class KinesisStreamConfig {
    public String roleARN;
    public KinesisStreamConfig withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    public String streamARN;
    public KinesisStreamConfig withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
}