package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointDestinationDescription
 * Describes the HTTP endpoint destination.
**/
public class HttpEndpointDestinationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public HttpEndpointBufferingHints bufferingHints;
    public HttpEndpointDestinationDescription withBufferingHints(HttpEndpointBufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public HttpEndpointDestinationDescription withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointConfiguration")
    public HttpEndpointDescription endpointConfiguration;
    public HttpEndpointDestinationDescription withEndpointConfiguration(HttpEndpointDescription endpointConfiguration) {
        this.endpointConfiguration = endpointConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public HttpEndpointDestinationDescription withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestConfiguration")
    public HttpEndpointRequestConfiguration requestConfiguration;
    public HttpEndpointDestinationDescription withRequestConfiguration(HttpEndpointRequestConfiguration requestConfiguration) {
        this.requestConfiguration = requestConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public HttpEndpointRetryOptions retryOptions;
    public HttpEndpointDestinationDescription withRetryOptions(HttpEndpointRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public HttpEndpointDestinationDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public HttpEndpointS3BackupModeEnum s3BackupMode;
    public HttpEndpointDestinationDescription withS3BackupMode(HttpEndpointS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3DestinationDescription")
    public S3DestinationDescription s3DestinationDescription;
    public HttpEndpointDestinationDescription withS3DestinationDescription(S3DestinationDescription s3DestinationDescription) {
        this.s3DestinationDescription = s3DestinationDescription;
        return this;
    }
}