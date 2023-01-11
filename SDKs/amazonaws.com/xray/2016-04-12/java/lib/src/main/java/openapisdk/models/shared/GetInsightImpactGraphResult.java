package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetInsightImpactGraphResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public GetInsightImpactGraphResult withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightId")
    public String insightId;
    public GetInsightImpactGraphResult withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightImpactGraphResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ServiceGraphEndTime")
    public OffsetDateTime serviceGraphEndTime;
    public GetInsightImpactGraphResult withServiceGraphEndTime(OffsetDateTime serviceGraphEndTime) {
        this.serviceGraphEndTime = serviceGraphEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ServiceGraphStartTime")
    public OffsetDateTime serviceGraphStartTime;
    public GetInsightImpactGraphResult withServiceGraphStartTime(OffsetDateTime serviceGraphStartTime) {
        this.serviceGraphStartTime = serviceGraphStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Services")
    public InsightImpactGraphService[] services;
    public GetInsightImpactGraphResult withServices(InsightImpactGraphService[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public GetInsightImpactGraphResult withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}