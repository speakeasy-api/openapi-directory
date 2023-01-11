package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReminderProfile {
    @JsonProperty("doctor")
    public Long doctor;
    public ReminderProfile withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ReminderProfile withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReminderProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("reminders")
    public ReminderProfileReminderTemplate[] reminders;
    public ReminderProfile withReminders(ReminderProfileReminderTemplate[] reminders) {
        this.reminders = reminders;
        return this;
    }
}