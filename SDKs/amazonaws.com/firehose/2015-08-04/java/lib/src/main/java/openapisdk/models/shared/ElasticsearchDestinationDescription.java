package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ElasticsearchDestinationDescription
 * The destination description in Amazon ES.
**/
public class ElasticsearchDestinationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public ElasticsearchBufferingHints bufferingHints;
    public ElasticsearchDestinationDescription withBufferingHints(ElasticsearchBufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public ElasticsearchDestinationDescription withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterEndpoint")
    public String clusterEndpoint;
    public ElasticsearchDestinationDescription withClusterEndpoint(String clusterEndpoint) {
        this.clusterEndpoint = clusterEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainARN")
    public String domainARN;
    public ElasticsearchDestinationDescription withDomainArn(String domainARN) {
        this.domainARN = domainARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexName")
    public String indexName;
    public ElasticsearchDestinationDescription withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexRotationPeriod")
    public ElasticsearchIndexRotationPeriodEnum indexRotationPeriod;
    public ElasticsearchDestinationDescription withIndexRotationPeriod(ElasticsearchIndexRotationPeriodEnum indexRotationPeriod) {
        this.indexRotationPeriod = indexRotationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public ElasticsearchDestinationDescription withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public ElasticsearchRetryOptions retryOptions;
    public ElasticsearchDestinationDescription withRetryOptions(ElasticsearchRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public ElasticsearchDestinationDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public ElasticsearchS3BackupModeEnum s3BackupMode;
    public ElasticsearchDestinationDescription withS3BackupMode(ElasticsearchS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3DestinationDescription")
    public S3DestinationDescription s3DestinationDescription;
    public ElasticsearchDestinationDescription withS3DestinationDescription(S3DestinationDescription s3DestinationDescription) {
        this.s3DestinationDescription = s3DestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeName")
    public String typeName;
    public ElasticsearchDestinationDescription withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfigurationDescription")
    public VpcConfigurationDescription vpcConfigurationDescription;
    public ElasticsearchDestinationDescription withVpcConfigurationDescription(VpcConfigurationDescription vpcConfigurationDescription) {
        this.vpcConfigurationDescription = vpcConfigurationDescription;
        return this;
    }
}