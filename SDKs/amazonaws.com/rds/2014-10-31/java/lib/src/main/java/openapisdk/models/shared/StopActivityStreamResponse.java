package openapisdk.models.shared;



public class StopActivityStreamResponse {
    public String kinesisStreamName;
    public StopActivityStreamResponse withKinesisStreamName(String kinesisStreamName) {
        this.kinesisStreamName = kinesisStreamName;
        return this;
    }
    public String kmsKeyId;
    public StopActivityStreamResponse withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public ActivityStreamStatusEnum status;
    public StopActivityStreamResponse withStatus(ActivityStreamStatusEnum status) {
        this.status = status;
        return this;
    }
}