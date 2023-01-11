package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointDestinationUpdate
 * Updates the specified HTTP endpoint destination.
**/
public class HttpEndpointDestinationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public HttpEndpointBufferingHints bufferingHints;
    public HttpEndpointDestinationUpdate withBufferingHints(HttpEndpointBufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public HttpEndpointDestinationUpdate withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointConfiguration")
    public HttpEndpointConfiguration endpointConfiguration;
    public HttpEndpointDestinationUpdate withEndpointConfiguration(HttpEndpointConfiguration endpointConfiguration) {
        this.endpointConfiguration = endpointConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public HttpEndpointDestinationUpdate withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestConfiguration")
    public HttpEndpointRequestConfiguration requestConfiguration;
    public HttpEndpointDestinationUpdate withRequestConfiguration(HttpEndpointRequestConfiguration requestConfiguration) {
        this.requestConfiguration = requestConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public HttpEndpointRetryOptions retryOptions;
    public HttpEndpointDestinationUpdate withRetryOptions(HttpEndpointRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public HttpEndpointDestinationUpdate withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public HttpEndpointS3BackupModeEnum s3BackupMode;
    public HttpEndpointDestinationUpdate withS3BackupMode(HttpEndpointS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Update")
    public S3DestinationUpdate s3Update;
    public HttpEndpointDestinationUpdate withS3Update(S3DestinationUpdate s3Update) {
        this.s3Update = s3Update;
        return this;
    }
}