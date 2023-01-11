package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * LoggingStatus
 * Describes the status of logging for a cluster.
**/
public class LoggingStatus {
    public String bucketName;
    public LoggingStatus withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    public String lastFailureMessage;
    public LoggingStatus withLastFailureMessage(String lastFailureMessage) {
        this.lastFailureMessage = lastFailureMessage;
        return this;
    }
    public OffsetDateTime lastFailureTime;
    public LoggingStatus withLastFailureTime(OffsetDateTime lastFailureTime) {
        this.lastFailureTime = lastFailureTime;
        return this;
    }
    public OffsetDateTime lastSuccessfulDeliveryTime;
    public LoggingStatus withLastSuccessfulDeliveryTime(OffsetDateTime lastSuccessfulDeliveryTime) {
        this.lastSuccessfulDeliveryTime = lastSuccessfulDeliveryTime;
        return this;
    }
    public Boolean loggingEnabled;
    public LoggingStatus withLoggingEnabled(Boolean loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
        return this;
    }
    public String s3KeyPrefix;
    public LoggingStatus withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
}