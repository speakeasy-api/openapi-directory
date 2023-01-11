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
 * TimeSeriesServiceStatistics
 * A list of TimeSeriesStatistic structures.
**/
public class TimeSeriesServiceStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EdgeSummaryStatistics")
    public EdgeStatistics edgeSummaryStatistics;
    public TimeSeriesServiceStatistics withEdgeSummaryStatistics(EdgeStatistics edgeSummaryStatistics) {
        this.edgeSummaryStatistics = edgeSummaryStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseTimeHistogram")
    public HistogramEntry[] responseTimeHistogram;
    public TimeSeriesServiceStatistics withResponseTimeHistogram(HistogramEntry[] responseTimeHistogram) {
        this.responseTimeHistogram = responseTimeHistogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceForecastStatistics")
    public ForecastStatistics serviceForecastStatistics;
    public TimeSeriesServiceStatistics withServiceForecastStatistics(ForecastStatistics serviceForecastStatistics) {
        this.serviceForecastStatistics = serviceForecastStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceSummaryStatistics")
    public ServiceStatistics serviceSummaryStatistics;
    public TimeSeriesServiceStatistics withServiceSummaryStatistics(ServiceStatistics serviceSummaryStatistics) {
        this.serviceSummaryStatistics = serviceSummaryStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public TimeSeriesServiceStatistics withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}