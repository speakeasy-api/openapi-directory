package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentAppointmentStatusTransition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public String appointment;
    public AppointmentAppointmentStatusTransition withAppointment(String appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datetime")
    public String datetime;
    public AppointmentAppointmentStatusTransition withDatetime(String datetime) {
        this.datetime = datetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_status")
    public String fromStatus;
    public AppointmentAppointmentStatusTransition withFromStatus(String fromStatus) {
        this.fromStatus = fromStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_status")
    public String toStatus;
    public AppointmentAppointmentStatusTransition withToStatus(String toStatus) {
        this.toStatus = toStatus;
        return this;
    }
}