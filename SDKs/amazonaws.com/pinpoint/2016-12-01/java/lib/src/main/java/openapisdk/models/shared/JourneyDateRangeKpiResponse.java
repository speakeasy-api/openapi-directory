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
 * JourneyDateRangeKpiResponse
 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
**/
public class JourneyDateRangeKpiResponse {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public JourneyDateRangeKpiResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public JourneyDateRangeKpiResponse withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("JourneyId")
    public String journeyId;
    public JourneyDateRangeKpiResponse withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
    @JsonProperty("KpiName")
    public String kpiName;
    public JourneyDateRangeKpiResponse withKpiName(String kpiName) {
        this.kpiName = kpiName;
        return this;
    }
    @JsonProperty("KpiResult")
    public BaseKpiResult kpiResult;
    public JourneyDateRangeKpiResponse withKpiResult(BaseKpiResult kpiResult) {
        this.kpiResult = kpiResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public JourneyDateRangeKpiResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public JourneyDateRangeKpiResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}