package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftDestinationDescription
 * Describes a destination in Amazon Redshift.
**/
public class RedshiftDestinationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public RedshiftDestinationDescription withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonProperty("ClusterJDBCURL")
    public String clusterJDBCURL;
    public RedshiftDestinationDescription withClusterJdbcurl(String clusterJDBCURL) {
        this.clusterJDBCURL = clusterJDBCURL;
        return this;
    }
    @JsonProperty("CopyCommand")
    public CopyCommand copyCommand;
    public RedshiftDestinationDescription withCopyCommand(CopyCommand copyCommand) {
        this.copyCommand = copyCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public RedshiftDestinationDescription withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public RedshiftRetryOptions retryOptions;
    public RedshiftDestinationDescription withRetryOptions(RedshiftRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public RedshiftDestinationDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupDescription")
    public S3DestinationDescription s3BackupDescription;
    public RedshiftDestinationDescription withS3BackupDescription(S3DestinationDescription s3BackupDescription) {
        this.s3BackupDescription = s3BackupDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public RedshiftS3BackupModeEnum s3BackupMode;
    public RedshiftDestinationDescription withS3BackupMode(RedshiftS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonProperty("S3DestinationDescription")
    public S3DestinationDescription s3DestinationDescription;
    public RedshiftDestinationDescription withS3DestinationDescription(S3DestinationDescription s3DestinationDescription) {
        this.s3DestinationDescription = s3DestinationDescription;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public RedshiftDestinationDescription withUsername(String username) {
        this.username = username;
        return this;
    }
}