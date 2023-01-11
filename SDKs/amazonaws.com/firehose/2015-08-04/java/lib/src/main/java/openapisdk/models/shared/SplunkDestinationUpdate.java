package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplunkDestinationUpdate
 * Describes an update for a destination in Splunk.
**/
public class SplunkDestinationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public SplunkDestinationUpdate withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECAcknowledgmentTimeoutInSeconds")
    public Long hecAcknowledgmentTimeoutInSeconds;
    public SplunkDestinationUpdate withHecAcknowledgmentTimeoutInSeconds(Long hecAcknowledgmentTimeoutInSeconds) {
        this.hecAcknowledgmentTimeoutInSeconds = hecAcknowledgmentTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECEndpoint")
    public String hecEndpoint;
    public SplunkDestinationUpdate withHecEndpoint(String hecEndpoint) {
        this.hecEndpoint = hecEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECEndpointType")
    public HecEndpointTypeEnum hecEndpointType;
    public SplunkDestinationUpdate withHecEndpointType(HecEndpointTypeEnum hecEndpointType) {
        this.hecEndpointType = hecEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECToken")
    public String hecToken;
    public SplunkDestinationUpdate withHecToken(String hecToken) {
        this.hecToken = hecToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public SplunkDestinationUpdate withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public SplunkRetryOptions retryOptions;
    public SplunkDestinationUpdate withRetryOptions(SplunkRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public SplunkS3BackupModeEnum s3BackupMode;
    public SplunkDestinationUpdate withS3BackupMode(SplunkS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Update")
    public S3DestinationUpdate s3Update;
    public SplunkDestinationUpdate withS3Update(S3DestinationUpdate s3Update) {
        this.s3Update = s3Update;
        return this;
    }
}