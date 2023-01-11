package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserScheduleResponse
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
public class UserScheduleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public UserScheduleResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public String feedType;
    public UserScheduleResponse withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedDate")
    public String lastModifiedDate;
    public UserScheduleResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfMonth")
    public Integer preferredTriggerDayOfMonth;
    public UserScheduleResponse withPreferredTriggerDayOfMonth(Integer preferredTriggerDayOfMonth) {
        this.preferredTriggerDayOfMonth = preferredTriggerDayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerDayOfWeek")
    public String preferredTriggerDayOfWeek;
    public UserScheduleResponse withPreferredTriggerDayOfWeek(String preferredTriggerDayOfWeek) {
        this.preferredTriggerDayOfWeek = preferredTriggerDayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredTriggerHour")
    public String preferredTriggerHour;
    public UserScheduleResponse withPreferredTriggerHour(String preferredTriggerHour) {
        this.preferredTriggerHour = preferredTriggerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleEndDate")
    public String scheduleEndDate;
    public UserScheduleResponse withScheduleEndDate(String scheduleEndDate) {
        this.scheduleEndDate = scheduleEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleId")
    public String scheduleId;
    public UserScheduleResponse withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleName")
    public String scheduleName;
    public UserScheduleResponse withScheduleName(String scheduleName) {
        this.scheduleName = scheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleStartDate")
    public String scheduleStartDate;
    public UserScheduleResponse withScheduleStartDate(String scheduleStartDate) {
        this.scheduleStartDate = scheduleStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTemplateId")
    public String scheduleTemplateId;
    public UserScheduleResponse withScheduleTemplateId(String scheduleTemplateId) {
        this.scheduleTemplateId = scheduleTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public UserScheduleResponse withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public UserScheduleResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public UserScheduleResponse withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}