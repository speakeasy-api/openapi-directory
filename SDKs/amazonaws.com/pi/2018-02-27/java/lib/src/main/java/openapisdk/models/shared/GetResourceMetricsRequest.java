package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetResourceMetricsRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public GetResourceMetricsRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("Identifier")
    public String identifier;
    public GetResourceMetricsRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetResourceMetricsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("MetricQueries")
    public MetricQuery[] metricQueries;
    public GetResourceMetricsRequest withMetricQueries(MetricQuery[] metricQueries) {
        this.metricQueries = metricQueries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetResourceMetricsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodInSeconds")
    public Long periodInSeconds;
    public GetResourceMetricsRequest withPeriodInSeconds(Long periodInSeconds) {
        this.periodInSeconds = periodInSeconds;
        return this;
    }
    @JsonProperty("ServiceType")
    public ServiceTypeEnum serviceType;
    public GetResourceMetricsRequest withServiceType(ServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public GetResourceMetricsRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}