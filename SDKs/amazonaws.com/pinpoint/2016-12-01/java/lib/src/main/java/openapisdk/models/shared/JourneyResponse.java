package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneyResponse
 * Provides information about the status, configuration, and other settings for a journey.
**/
public class JourneyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Activities")
    public java.util.Map<String, Activity> activities;
    public JourneyResponse withActivities(java.util.Map<String, Activity> activities) {
        this.activities = activities;
        return this;
    }
    @JsonProperty("ApplicationId")
    public String applicationId;
    public JourneyResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public JourneyResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public JourneyResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public JourneyResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public JourneyLimits limits;
    public JourneyResponse withLimits(JourneyLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalTime")
    public Boolean localTime;
    public JourneyResponse withLocalTime(Boolean localTime) {
        this.localTime = localTime;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public JourneyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public QuietTime quietTime;
    public JourneyResponse withQuietTime(QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshFrequency")
    public String refreshFrequency;
    public JourneyResponse withRefreshFrequency(String refreshFrequency) {
        this.refreshFrequency = refreshFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshOnSegmentUpdate")
    public Boolean refreshOnSegmentUpdate;
    public JourneyResponse withRefreshOnSegmentUpdate(Boolean refreshOnSegmentUpdate) {
        this.refreshOnSegmentUpdate = refreshOnSegmentUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public JourneySchedule schedule;
    public JourneyResponse withSchedule(JourneySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartActivity")
    public String startActivity;
    public JourneyResponse withStartActivity(String startActivity) {
        this.startActivity = startActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartCondition")
    public StartCondition startCondition;
    public JourneyResponse withStartCondition(StartCondition startCondition) {
        this.startCondition = startCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public StateEnum state;
    public JourneyResponse withState(StateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitForQuietTime")
    public Boolean waitForQuietTime;
    public JourneyResponse withWaitForQuietTime(Boolean waitForQuietTime) {
        this.waitForQuietTime = waitForQuietTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public JourneyResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}