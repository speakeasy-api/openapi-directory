package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDimensionKeysRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public DescribeDimensionKeysRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public java.util.Map<String, String> filter;
    public DescribeDimensionKeysRequest withFilter(java.util.Map<String, String> filter) {
        this.filter = filter;
        return this;
    }
    @JsonProperty("GroupBy")
    public DimensionGroup groupBy;
    public DescribeDimensionKeysRequest withGroupBy(DimensionGroup groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @JsonProperty("Identifier")
    public String identifier;
    public DescribeDimensionKeysRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeDimensionKeysRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("Metric")
    public String metric;
    public DescribeDimensionKeysRequest withMetric(String metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDimensionKeysRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionBy")
    public DimensionGroup partitionBy;
    public DescribeDimensionKeysRequest withPartitionBy(DimensionGroup partitionBy) {
        this.partitionBy = partitionBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodInSeconds")
    public Long periodInSeconds;
    public DescribeDimensionKeysRequest withPeriodInSeconds(Long periodInSeconds) {
        this.periodInSeconds = periodInSeconds;
        return this;
    }
    @JsonProperty("ServiceType")
    public ServiceTypeEnum serviceType;
    public DescribeDimensionKeysRequest withServiceType(ServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public DescribeDimensionKeysRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}