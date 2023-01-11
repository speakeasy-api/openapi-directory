package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointDestinationConfiguration
 * Describes the configuration of the HTTP endpoint destination.
**/
public class HttpEndpointDestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public HttpEndpointBufferingHints bufferingHints;
    public HttpEndpointDestinationConfiguration withBufferingHints(HttpEndpointBufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public HttpEndpointDestinationConfiguration withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonProperty("EndpointConfiguration")
    public HttpEndpointConfiguration endpointConfiguration;
    public HttpEndpointDestinationConfiguration withEndpointConfiguration(HttpEndpointConfiguration endpointConfiguration) {
        this.endpointConfiguration = endpointConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public HttpEndpointDestinationConfiguration withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestConfiguration")
    public HttpEndpointRequestConfiguration requestConfiguration;
    public HttpEndpointDestinationConfiguration withRequestConfiguration(HttpEndpointRequestConfiguration requestConfiguration) {
        this.requestConfiguration = requestConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public HttpEndpointRetryOptions retryOptions;
    public HttpEndpointDestinationConfiguration withRetryOptions(HttpEndpointRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public HttpEndpointDestinationConfiguration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public HttpEndpointS3BackupModeEnum s3BackupMode;
    public HttpEndpointDestinationConfiguration withS3BackupMode(HttpEndpointS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonProperty("S3Configuration")
    public S3DestinationConfiguration s3Configuration;
    public HttpEndpointDestinationConfiguration withS3Configuration(S3DestinationConfiguration s3Configuration) {
        this.s3Configuration = s3Configuration;
        return this;
    }
}