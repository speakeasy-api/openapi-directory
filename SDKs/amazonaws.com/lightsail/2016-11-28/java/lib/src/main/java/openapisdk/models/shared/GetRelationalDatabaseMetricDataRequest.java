package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetRelationalDatabaseMetricDataRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetRelationalDatabaseMetricDataRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("metricName")
    public RelationalDatabaseMetricNameEnum metricName;
    public GetRelationalDatabaseMetricDataRequest withMetricName(RelationalDatabaseMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public GetRelationalDatabaseMetricDataRequest withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public GetRelationalDatabaseMetricDataRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetRelationalDatabaseMetricDataRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("statistics")
    public MetricStatisticEnum[] statistics;
    public GetRelationalDatabaseMetricDataRequest withStatistics(MetricStatisticEnum[] statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public GetRelationalDatabaseMetricDataRequest withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}