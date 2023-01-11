package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateJourneyRequestBodyWriteJourneyRequest
 * Specifies the configuration and other settings for a journey.
**/
public class UpdateJourneyRequestBodyWriteJourneyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Activities")
    public java.util.Map<String, openapisdk.models.shared.Activity> activities;
    public UpdateJourneyRequestBodyWriteJourneyRequest withActivities(java.util.Map<String, openapisdk.models.shared.Activity> activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public UpdateJourneyRequestBodyWriteJourneyRequest withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public UpdateJourneyRequestBodyWriteJourneyRequest withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public openapisdk.models.shared.JourneyLimits limits;
    public UpdateJourneyRequestBodyWriteJourneyRequest withLimits(openapisdk.models.shared.JourneyLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalTime")
    public Boolean localTime;
    public UpdateJourneyRequestBodyWriteJourneyRequest withLocalTime(Boolean localTime) {
        this.localTime = localTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateJourneyRequestBodyWriteJourneyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public openapisdk.models.shared.QuietTime quietTime;
    public UpdateJourneyRequestBodyWriteJourneyRequest withQuietTime(openapisdk.models.shared.QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshFrequency")
    public String refreshFrequency;
    public UpdateJourneyRequestBodyWriteJourneyRequest withRefreshFrequency(String refreshFrequency) {
        this.refreshFrequency = refreshFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshOnSegmentUpdate")
    public Boolean refreshOnSegmentUpdate;
    public UpdateJourneyRequestBodyWriteJourneyRequest withRefreshOnSegmentUpdate(Boolean refreshOnSegmentUpdate) {
        this.refreshOnSegmentUpdate = refreshOnSegmentUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public openapisdk.models.shared.JourneySchedule schedule;
    public UpdateJourneyRequestBodyWriteJourneyRequest withSchedule(openapisdk.models.shared.JourneySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartActivity")
    public String startActivity;
    public UpdateJourneyRequestBodyWriteJourneyRequest withStartActivity(String startActivity) {
        this.startActivity = startActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartCondition")
    public openapisdk.models.shared.StartCondition startCondition;
    public UpdateJourneyRequestBodyWriteJourneyRequest withStartCondition(openapisdk.models.shared.StartCondition startCondition) {
        this.startCondition = startCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public openapisdk.models.shared.StateEnum state;
    public UpdateJourneyRequestBodyWriteJourneyRequest withState(openapisdk.models.shared.StateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitForQuietTime")
    public Boolean waitForQuietTime;
    public UpdateJourneyRequestBodyWriteJourneyRequest withWaitForQuietTime(Boolean waitForQuietTime) {
        this.waitForQuietTime = waitForQuietTime;
        return this;
    }
}