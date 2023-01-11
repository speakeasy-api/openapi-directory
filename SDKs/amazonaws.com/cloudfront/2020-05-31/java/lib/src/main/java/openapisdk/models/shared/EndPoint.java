package openapisdk.models.shared;



/**
 * EndPoint
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
**/
public class EndPoint {
    public KinesisStreamConfig kinesisStreamConfig;
    public EndPoint withKinesisStreamConfig(KinesisStreamConfig kinesisStreamConfig) {
        this.kinesisStreamConfig = kinesisStreamConfig;
        return this;
    }
    public String streamType;
    public EndPoint withStreamType(String streamType) {
        this.streamType = streamType;
        return this;
    }
}