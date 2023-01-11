package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleAutoImportRequest
 * The message request to schedule the auto import
**/
public class ScheduleAutoImportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localTimeZoneName")
    public String localTimeZoneName;
    public ScheduleAutoImportRequest withLocalTimeZoneName(String localTimeZoneName) {
        this.localTimeZoneName = localTimeZoneName;
        return this;
    }
    @JsonProperty("schedules")
    public String[] schedules;
    public ScheduleAutoImportRequest withSchedules(String[] schedules) {
        this.schedules = schedules;
        return this;
    }
}