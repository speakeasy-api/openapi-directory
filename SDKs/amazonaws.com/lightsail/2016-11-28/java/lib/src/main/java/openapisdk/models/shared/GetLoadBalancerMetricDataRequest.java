package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetLoadBalancerMetricDataRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetLoadBalancerMetricDataRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public GetLoadBalancerMetricDataRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @JsonProperty("metricName")
    public LoadBalancerMetricNameEnum metricName;
    public GetLoadBalancerMetricDataRequest withMetricName(LoadBalancerMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public GetLoadBalancerMetricDataRequest withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetLoadBalancerMetricDataRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("statistics")
    public MetricStatisticEnum[] statistics;
    public GetLoadBalancerMetricDataRequest withStatistics(MetricStatisticEnum[] statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public GetLoadBalancerMetricDataRequest withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}