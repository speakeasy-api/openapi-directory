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
 * CampaignDateRangeKpiResponse
 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
**/
public class CampaignDateRangeKpiResponse {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public CampaignDateRangeKpiResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("CampaignId")
    public String campaignId;
    public CampaignDateRangeKpiResponse withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public CampaignDateRangeKpiResponse withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("KpiName")
    public String kpiName;
    public CampaignDateRangeKpiResponse withKpiName(String kpiName) {
        this.kpiName = kpiName;
        return this;
    }
    @JsonProperty("KpiResult")
    public BaseKpiResult kpiResult;
    public CampaignDateRangeKpiResponse withKpiResult(BaseKpiResult kpiResult) {
        this.kpiResult = kpiResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public CampaignDateRangeKpiResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public CampaignDateRangeKpiResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}