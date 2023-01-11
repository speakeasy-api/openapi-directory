package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplunkDestinationDescription
 * Describes a destination in Splunk.
**/
public class SplunkDestinationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public SplunkDestinationDescription withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECAcknowledgmentTimeoutInSeconds")
    public Long hecAcknowledgmentTimeoutInSeconds;
    public SplunkDestinationDescription withHecAcknowledgmentTimeoutInSeconds(Long hecAcknowledgmentTimeoutInSeconds) {
        this.hecAcknowledgmentTimeoutInSeconds = hecAcknowledgmentTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECEndpoint")
    public String hecEndpoint;
    public SplunkDestinationDescription withHecEndpoint(String hecEndpoint) {
        this.hecEndpoint = hecEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECEndpointType")
    public HecEndpointTypeEnum hecEndpointType;
    public SplunkDestinationDescription withHecEndpointType(HecEndpointTypeEnum hecEndpointType) {
        this.hecEndpointType = hecEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HECToken")
    public String hecToken;
    public SplunkDestinationDescription withHecToken(String hecToken) {
        this.hecToken = hecToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public SplunkDestinationDescription withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public SplunkRetryOptions retryOptions;
    public SplunkDestinationDescription withRetryOptions(SplunkRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public SplunkS3BackupModeEnum s3BackupMode;
    public SplunkDestinationDescription withS3BackupMode(SplunkS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3DestinationDescription")
    public S3DestinationDescription s3DestinationDescription;
    public SplunkDestinationDescription withS3DestinationDescription(S3DestinationDescription s3DestinationDescription) {
        this.s3DestinationDescription = s3DestinationDescription;
        return this;
    }
}