package openapisdk.models.shared;



public class StartActivityStreamResponse {
    public Boolean applyImmediately;
    public StartActivityStreamResponse withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    public Boolean engineNativeAuditFieldsIncluded;
    public StartActivityStreamResponse withEngineNativeAuditFieldsIncluded(Boolean engineNativeAuditFieldsIncluded) {
        this.engineNativeAuditFieldsIncluded = engineNativeAuditFieldsIncluded;
        return this;
    }
    public String kinesisStreamName;
    public StartActivityStreamResponse withKinesisStreamName(String kinesisStreamName) {
        this.kinesisStreamName = kinesisStreamName;
        return this;
    }
    public String kmsKeyId;
    public StartActivityStreamResponse withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public ActivityStreamModeEnum mode;
    public StartActivityStreamResponse withMode(ActivityStreamModeEnum mode) {
        this.mode = mode;
        return this;
    }
    public ActivityStreamStatusEnum status;
    public StartActivityStreamResponse withStatus(ActivityStreamStatusEnum status) {
        this.status = status;
        return this;
    }
}