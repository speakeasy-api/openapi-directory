package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMetricSetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionList")
    public String[] dimensionList;
    public UpdateMetricSetRequestBody withDimensionList(String[] dimensionList) {
        this.dimensionList = dimensionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricList")
    public openapisdk.models.shared.Metric[] metricList;
    public UpdateMetricSetRequestBody withMetricList(openapisdk.models.shared.Metric[] metricList) {
        this.metricList = metricList;
        return this;
    }
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public UpdateMetricSetRequestBody withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetDescription")
    public String metricSetDescription;
    public UpdateMetricSetRequestBody withMetricSetDescription(String metricSetDescription) {
        this.metricSetDescription = metricSetDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetFrequency")
    public UpdateMetricSetRequestBodyMetricSetFrequencyEnum metricSetFrequency;
    public UpdateMetricSetRequestBody withMetricSetFrequency(UpdateMetricSetRequestBodyMetricSetFrequencyEnum metricSetFrequency) {
        this.metricSetFrequency = metricSetFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSource")
    public UpdateMetricSetRequestBodyMetricSource metricSource;
    public UpdateMetricSetRequestBody withMetricSource(UpdateMetricSetRequestBodyMetricSource metricSource) {
        this.metricSource = metricSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Offset")
    public Long offset;
    public UpdateMetricSetRequestBody withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampColumn")
    public UpdateMetricSetRequestBodyTimestampColumn timestampColumn;
    public UpdateMetricSetRequestBody withTimestampColumn(UpdateMetricSetRequestBodyTimestampColumn timestampColumn) {
        this.timestampColumn = timestampColumn;
        return this;
    }
}