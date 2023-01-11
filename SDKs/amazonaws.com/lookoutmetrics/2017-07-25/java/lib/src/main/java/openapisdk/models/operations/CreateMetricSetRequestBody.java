package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMetricSetRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public CreateMetricSetRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionList")
    public String[] dimensionList;
    public CreateMetricSetRequestBody withDimensionList(String[] dimensionList) {
        this.dimensionList = dimensionList;
        return this;
    }
    @JsonProperty("MetricList")
    public openapisdk.models.shared.Metric[] metricList;
    public CreateMetricSetRequestBody withMetricList(openapisdk.models.shared.Metric[] metricList) {
        this.metricList = metricList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetDescription")
    public String metricSetDescription;
    public CreateMetricSetRequestBody withMetricSetDescription(String metricSetDescription) {
        this.metricSetDescription = metricSetDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetFrequency")
    public CreateMetricSetRequestBodyMetricSetFrequencyEnum metricSetFrequency;
    public CreateMetricSetRequestBody withMetricSetFrequency(CreateMetricSetRequestBodyMetricSetFrequencyEnum metricSetFrequency) {
        this.metricSetFrequency = metricSetFrequency;
        return this;
    }
    @JsonProperty("MetricSetName")
    public String metricSetName;
    public CreateMetricSetRequestBody withMetricSetName(String metricSetName) {
        this.metricSetName = metricSetName;
        return this;
    }
    @JsonProperty("MetricSource")
    public CreateMetricSetRequestBodyMetricSource metricSource;
    public CreateMetricSetRequestBody withMetricSource(CreateMetricSetRequestBodyMetricSource metricSource) {
        this.metricSource = metricSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Offset")
    public Long offset;
    public CreateMetricSetRequestBody withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateMetricSetRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampColumn")
    public CreateMetricSetRequestBodyTimestampColumn timestampColumn;
    public CreateMetricSetRequestBody withTimestampColumn(CreateMetricSetRequestBodyTimestampColumn timestampColumn) {
        this.timestampColumn = timestampColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public CreateMetricSetRequestBody withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}