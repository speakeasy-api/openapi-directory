package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppointmentProfile
 * Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.
**/
public class AppointmentProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public AppointmentProfile withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("color")
    public String color;
    public AppointmentProfile withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public Long doctor;
    public AppointmentProfile withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public AppointmentProfile withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AppointmentProfile withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AppointmentProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("online_scheduling")
    public Boolean onlineScheduling;
    public AppointmentProfile withOnlineScheduling(Boolean onlineScheduling) {
        this.onlineScheduling = onlineScheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public AppointmentProfile withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_order")
    public Long sortOrder;
    public AppointmentProfile withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}