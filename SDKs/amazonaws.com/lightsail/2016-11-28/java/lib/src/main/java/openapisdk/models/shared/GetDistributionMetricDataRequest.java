package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetDistributionMetricDataRequest {
    @JsonProperty("distributionName")
    public String distributionName;
    public GetDistributionMetricDataRequest withDistributionName(String distributionName) {
        this.distributionName = distributionName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetDistributionMetricDataRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("metricName")
    public DistributionMetricNameEnum metricName;
    public GetDistributionMetricDataRequest withMetricName(DistributionMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public GetDistributionMetricDataRequest withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetDistributionMetricDataRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("statistics")
    public MetricStatisticEnum[] statistics;
    public GetDistributionMetricDataRequest withStatistics(MetricStatisticEnum[] statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public GetDistributionMetricDataRequest withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}