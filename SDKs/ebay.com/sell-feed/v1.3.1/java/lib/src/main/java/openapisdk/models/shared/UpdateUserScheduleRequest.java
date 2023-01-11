package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserScheduleRequest
 * The type that defines the fields for a schedule update to a schedule generated with the Feed API.
**/
public class UpdateUserScheduleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfMonth")
    public Integer preferredTriggerDayOfMonth;
    public UpdateUserScheduleRequest withPreferredTriggerDayOfMonth(Integer preferredTriggerDayOfMonth) {
        this.preferredTriggerDayOfMonth = preferredTriggerDayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfWeek")
    public String preferredTriggerDayOfWeek;
    public UpdateUserScheduleRequest withPreferredTriggerDayOfWeek(String preferredTriggerDayOfWeek) {
        this.preferredTriggerDayOfWeek = preferredTriggerDayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerHour")
    public String preferredTriggerHour;
    public UpdateUserScheduleRequest withPreferredTriggerHour(String preferredTriggerHour) {
        this.preferredTriggerHour = preferredTriggerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleEndDate")
    public String scheduleEndDate;
    public UpdateUserScheduleRequest withScheduleEndDate(String scheduleEndDate) {
        this.scheduleEndDate = scheduleEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleName")
    public String scheduleName;
    public UpdateUserScheduleRequest withScheduleName(String scheduleName) {
        this.scheduleName = scheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleStartDate")
    public String scheduleStartDate;
    public UpdateUserScheduleRequest withScheduleStartDate(String scheduleStartDate) {
        this.scheduleStartDate = scheduleStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public UpdateUserScheduleRequest withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}