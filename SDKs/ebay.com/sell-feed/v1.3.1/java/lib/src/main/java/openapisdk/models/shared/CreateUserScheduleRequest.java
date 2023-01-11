package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUserScheduleRequest
 * The type that defines the fields for the createSchedule method.
**/
public class CreateUserScheduleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public CreateUserScheduleRequest withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfMonth")
    public Integer preferredTriggerDayOfMonth;
    public CreateUserScheduleRequest withPreferredTriggerDayOfMonth(Integer preferredTriggerDayOfMonth) {
        this.preferredTriggerDayOfMonth = preferredTriggerDayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfWeek")
    public String preferredTriggerDayOfWeek;
    public CreateUserScheduleRequest withPreferredTriggerDayOfWeek(String preferredTriggerDayOfWeek) {
        this.preferredTriggerDayOfWeek = preferredTriggerDayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerHour")
    public String preferredTriggerHour;
    public CreateUserScheduleRequest withPreferredTriggerHour(String preferredTriggerHour) {
        this.preferredTriggerHour = preferredTriggerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleEndDate")
    public String scheduleEndDate;
    public CreateUserScheduleRequest withScheduleEndDate(String scheduleEndDate) {
        this.scheduleEndDate = scheduleEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleName")
    public String scheduleName;
    public CreateUserScheduleRequest withScheduleName(String scheduleName) {
        this.scheduleName = scheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleStartDate")
    public String scheduleStartDate;
    public CreateUserScheduleRequest withScheduleStartDate(String scheduleStartDate) {
        this.scheduleStartDate = scheduleStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTemplateId")
    public String scheduleTemplateId;
    public CreateUserScheduleRequest withScheduleTemplateId(String scheduleTemplateId) {
        this.scheduleTemplateId = scheduleTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public CreateUserScheduleRequest withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}