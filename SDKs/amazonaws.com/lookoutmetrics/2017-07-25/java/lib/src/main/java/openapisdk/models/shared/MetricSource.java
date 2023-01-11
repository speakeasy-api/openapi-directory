package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricSource
 * Contains information about source data used to generate a metric.
**/
public class MetricSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppFlowConfig")
    public AppFlowConfig appFlowConfig;
    public MetricSource withAppFlowConfig(AppFlowConfig appFlowConfig) {
        this.appFlowConfig = appFlowConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchConfig")
    public CloudWatchConfig cloudWatchConfig;
    public MetricSource withCloudWatchConfig(CloudWatchConfig cloudWatchConfig) {
        this.cloudWatchConfig = cloudWatchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RDSSourceConfig")
    public RdsSourceConfig rdsSourceConfig;
    public MetricSource withRdsSourceConfig(RdsSourceConfig rdsSourceConfig) {
        this.rdsSourceConfig = rdsSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftSourceConfig")
    public RedshiftSourceConfig redshiftSourceConfig;
    public MetricSource withRedshiftSourceConfig(RedshiftSourceConfig redshiftSourceConfig) {
        this.redshiftSourceConfig = redshiftSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3SourceConfig")
    public S3SourceConfig s3SourceConfig;
    public MetricSource withS3SourceConfig(S3SourceConfig s3SourceConfig) {
        this.s3SourceConfig = s3SourceConfig;
        return this;
    }
}