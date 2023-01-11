package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketLoggingConfiguration
 * Information about logging for the S3 bucket
**/
public class AwsS3BucketLoggingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationBucketName")
    public String destinationBucketName;
    public AwsS3BucketLoggingConfiguration withDestinationBucketName(String destinationBucketName) {
        this.destinationBucketName = destinationBucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogFilePrefix")
    public String logFilePrefix;
    public AwsS3BucketLoggingConfiguration withLogFilePrefix(String logFilePrefix) {
        this.logFilePrefix = logFilePrefix;
        return this;
    }
}