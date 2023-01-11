package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplunkDestinationConfiguration
 * Describes the configuration of a destination in Splunk.
**/
public class SplunkDestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public SplunkDestinationConfiguration withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECAcknowledgmentTimeoutInSeconds")
    public Long hecAcknowledgmentTimeoutInSeconds;
    public SplunkDestinationConfiguration withHecAcknowledgmentTimeoutInSeconds(Long hecAcknowledgmentTimeoutInSeconds) {
        this.hecAcknowledgmentTimeoutInSeconds = hecAcknowledgmentTimeoutInSeconds;
        return this;
    }
    @JsonProperty("HECEndpoint")
    public String hecEndpoint;
    public SplunkDestinationConfiguration withHecEndpoint(String hecEndpoint) {
        this.hecEndpoint = hecEndpoint;
        return this;
    }
    @JsonProperty("HECEndpointType")
    public HecEndpointTypeEnum hecEndpointType;
    public SplunkDestinationConfiguration withHecEndpointType(HecEndpointTypeEnum hecEndpointType) {
        this.hecEndpointType = hecEndpointType;
        return this;
    }
    @JsonProperty("HECToken")
    public String hecToken;
    public SplunkDestinationConfiguration withHecToken(String hecToken) {
        this.hecToken = hecToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public SplunkDestinationConfiguration withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public SplunkRetryOptions retryOptions;
    public SplunkDestinationConfiguration withRetryOptions(SplunkRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public SplunkS3BackupModeEnum s3BackupMode;
    public SplunkDestinationConfiguration withS3BackupMode(SplunkS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonProperty("S3Configuration")
    public S3DestinationConfiguration s3Configuration;
    public SplunkDestinationConfiguration withS3Configuration(S3DestinationConfiguration s3Configuration) {
        this.s3Configuration = s3Configuration;
        return this;
    }
}