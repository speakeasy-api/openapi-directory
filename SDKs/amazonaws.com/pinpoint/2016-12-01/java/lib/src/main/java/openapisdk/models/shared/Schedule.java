package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * Specifies the schedule settings for a campaign.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTime")
    public String endTime;
    public Schedule withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventFilter")
    public CampaignEventFilter eventFilter;
    public Schedule withEventFilter(CampaignEventFilter eventFilter) {
        this.eventFilter = eventFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Frequency")
    public FrequencyEnum frequency;
    public Schedule withFrequency(FrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLocalTime")
    public Boolean isLocalTime;
    public Schedule withIsLocalTime(Boolean isLocalTime) {
        this.isLocalTime = isLocalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public QuietTime quietTime;
    public Schedule withQuietTime(QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
    @JsonProperty("StartTime")
    public String startTime;
    public Schedule withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public Schedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}