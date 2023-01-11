package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ElasticsearchDestinationConfiguration
 * Describes the configuration of a destination in Amazon ES.
**/
public class ElasticsearchDestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public ElasticsearchBufferingHints bufferingHints;
    public ElasticsearchDestinationConfiguration withBufferingHints(ElasticsearchBufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public ElasticsearchDestinationConfiguration withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterEndpoint")
    public String clusterEndpoint;
    public ElasticsearchDestinationConfiguration withClusterEndpoint(String clusterEndpoint) {
        this.clusterEndpoint = clusterEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainARN")
    public String domainARN;
    public ElasticsearchDestinationConfiguration withDomainArn(String domainARN) {
        this.domainARN = domainARN;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public ElasticsearchDestinationConfiguration withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexRotationPeriod")
    public ElasticsearchIndexRotationPeriodEnum indexRotationPeriod;
    public ElasticsearchDestinationConfiguration withIndexRotationPeriod(ElasticsearchIndexRotationPeriodEnum indexRotationPeriod) {
        this.indexRotationPeriod = indexRotationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public ElasticsearchDestinationConfiguration withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public ElasticsearchRetryOptions retryOptions;
    public ElasticsearchDestinationConfiguration withRetryOptions(ElasticsearchRetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public ElasticsearchDestinationConfiguration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public ElasticsearchS3BackupModeEnum s3BackupMode;
    public ElasticsearchDestinationConfiguration withS3BackupMode(ElasticsearchS3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonProperty("S3Configuration")
    public S3DestinationConfiguration s3Configuration;
    public ElasticsearchDestinationConfiguration withS3Configuration(S3DestinationConfiguration s3Configuration) {
        this.s3Configuration = s3Configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeName")
    public String typeName;
    public ElasticsearchDestinationConfiguration withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public ElasticsearchDestinationConfiguration withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}