package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppointmentTemplate
 * Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
**/
public class AppointmentTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public AppointmentTemplate withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public String dateEnd;
    public AppointmentTemplate withDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public String dateStart;
    public AppointmentTemplate withDateStart(String dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public AppointmentTemplate withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("exam_room")
    public Long examRoom;
    public AppointmentTemplate withExamRoom(Long examRoom) {
        this.examRoom = examRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AppointmentTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("office")
    public Long office;
    public AppointmentTemplate withOffice(Long office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_slots")
    public AppointmentTemplateOpenSlot[] openSlots;
    public AppointmentTemplate withOpenSlots(AppointmentTemplateOpenSlot[] openSlots) {
        this.openSlots = openSlots;
        return this;
    }
    @JsonProperty("profile")
    public Long profile;
    public AppointmentTemplate withProfile(Long profile) {
        this.profile = profile;
        return this;
    }
    @JsonProperty("scheduled_time")
    public String scheduledTime;
    public AppointmentTemplate withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonProperty("week_days")
    public Long[] weekDays;
    public AppointmentTemplate withWeekDays(Long[] weekDays) {
        this.weekDays = weekDays;
        return this;
    }
}