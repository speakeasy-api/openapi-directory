package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeMetricSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public DescribeMetricSetResponse withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeMetricSetResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionList")
    public String[] dimensionList;
    public DescribeMetricSetResponse withDimensionList(String[] dimensionList) {
        this.dimensionList = dimensionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribeMetricSetResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricList")
    public Metric[] metricList;
    public DescribeMetricSetResponse withMetricList(Metric[] metricList) {
        this.metricList = metricList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public DescribeMetricSetResponse withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetDescription")
    public String metricSetDescription;
    public DescribeMetricSetResponse withMetricSetDescription(String metricSetDescription) {
        this.metricSetDescription = metricSetDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetFrequency")
    public FrequencyEnum metricSetFrequency;
    public DescribeMetricSetResponse withMetricSetFrequency(FrequencyEnum metricSetFrequency) {
        this.metricSetFrequency = metricSetFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetName")
    public String metricSetName;
    public DescribeMetricSetResponse withMetricSetName(String metricSetName) {
        this.metricSetName = metricSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSource")
    public MetricSource metricSource;
    public DescribeMetricSetResponse withMetricSource(MetricSource metricSource) {
        this.metricSource = metricSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Offset")
    public Long offset;
    public DescribeMetricSetResponse withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampColumn")
    public TimestampColumn timestampColumn;
    public DescribeMetricSetResponse withTimestampColumn(TimestampColumn timestampColumn) {
        this.timestampColumn = timestampColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public DescribeMetricSetResponse withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}