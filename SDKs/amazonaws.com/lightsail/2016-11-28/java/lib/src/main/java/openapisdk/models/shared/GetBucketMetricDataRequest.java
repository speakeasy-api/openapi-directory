package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetBucketMetricDataRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public GetBucketMetricDataRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetBucketMetricDataRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("metricName")
    public BucketMetricNameEnum metricName;
    public GetBucketMetricDataRequest withMetricName(BucketMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public GetBucketMetricDataRequest withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetBucketMetricDataRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("statistics")
    public MetricStatisticEnum[] statistics;
    public GetBucketMetricDataRequest withStatistics(MetricStatisticEnum[] statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public GetBucketMetricDataRequest withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}