package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityResponse
 * Provides information about an activity that was performed by a campaign.
**/
public class ActivityResponse {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public ActivityResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("CampaignId")
    public String campaignId;
    public ActivityResponse withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public String end;
    public ActivityResponse withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public ActivityResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public String result;
    public ActivityResponse withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledStart")
    public String scheduledStart;
    public ActivityResponse withScheduledStart(String scheduledStart) {
        this.scheduledStart = scheduledStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Start")
    public String start;
    public ActivityResponse withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public ActivityResponse withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessfulEndpointCount")
    public Long successfulEndpointCount;
    public ActivityResponse withSuccessfulEndpointCount(Long successfulEndpointCount) {
        this.successfulEndpointCount = successfulEndpointCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimezonesCompletedCount")
    public Long timezonesCompletedCount;
    public ActivityResponse withTimezonesCompletedCount(Long timezonesCompletedCount) {
        this.timezonesCompletedCount = timezonesCompletedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimezonesTotalCount")
    public Long timezonesTotalCount;
    public ActivityResponse withTimezonesTotalCount(Long timezonesTotalCount) {
        this.timezonesTotalCount = timezonesTotalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalEndpointCount")
    public Long totalEndpointCount;
    public ActivityResponse withTotalEndpointCount(Long totalEndpointCount) {
        this.totalEndpointCount = totalEndpointCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentId")
    public String treatmentId;
    public ActivityResponse withTreatmentId(String treatmentId) {
        this.treatmentId = treatmentId;
        return this;
    }
}