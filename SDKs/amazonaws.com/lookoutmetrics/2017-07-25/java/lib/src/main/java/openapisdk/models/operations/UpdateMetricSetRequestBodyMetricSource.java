package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMetricSetRequestBodyMetricSource
 * Contains information about source data used to generate a metric.
**/
public class UpdateMetricSetRequestBodyMetricSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppFlowConfig")
    public openapisdk.models.shared.AppFlowConfig appFlowConfig;
    public UpdateMetricSetRequestBodyMetricSource withAppFlowConfig(openapisdk.models.shared.AppFlowConfig appFlowConfig) {
        this.appFlowConfig = appFlowConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchConfig")
    public openapisdk.models.shared.CloudWatchConfig cloudWatchConfig;
    public UpdateMetricSetRequestBodyMetricSource withCloudWatchConfig(openapisdk.models.shared.CloudWatchConfig cloudWatchConfig) {
        this.cloudWatchConfig = cloudWatchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RDSSourceConfig")
    public openapisdk.models.shared.RdsSourceConfig rdsSourceConfig;
    public UpdateMetricSetRequestBodyMetricSource withRdsSourceConfig(openapisdk.models.shared.RdsSourceConfig rdsSourceConfig) {
        this.rdsSourceConfig = rdsSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftSourceConfig")
    public openapisdk.models.shared.RedshiftSourceConfig redshiftSourceConfig;
    public UpdateMetricSetRequestBodyMetricSource withRedshiftSourceConfig(openapisdk.models.shared.RedshiftSourceConfig redshiftSourceConfig) {
        this.redshiftSourceConfig = redshiftSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3SourceConfig")
    public openapisdk.models.shared.S3SourceConfig s3SourceConfig;
    public UpdateMetricSetRequestBodyMetricSource withS3SourceConfig(openapisdk.models.shared.S3SourceConfig s3SourceConfig) {
        this.s3SourceConfig = s3SourceConfig;
        return this;
    }
}