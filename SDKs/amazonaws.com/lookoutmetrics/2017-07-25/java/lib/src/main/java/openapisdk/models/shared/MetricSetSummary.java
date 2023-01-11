package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MetricSetSummary
 * Contains information about a dataset.
**/
public class MetricSetSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public MetricSetSummary withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public MetricSetSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public MetricSetSummary withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public MetricSetSummary withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetDescription")
    public String metricSetDescription;
    public MetricSetSummary withMetricSetDescription(String metricSetDescription) {
        this.metricSetDescription = metricSetDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetName")
    public String metricSetName;
    public MetricSetSummary withMetricSetName(String metricSetName) {
        this.metricSetName = metricSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public MetricSetSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}