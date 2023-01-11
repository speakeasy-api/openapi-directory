package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppointmentClaimBillingNotes
 * Structure of a billing note
**/
public class AppointmentClaimBillingNotes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public Long appointment;
    public AppointmentClaimBillingNotes withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public AppointmentClaimBillingNotes withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public AppointmentClaimBillingNotes withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AppointmentClaimBillingNotes withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public AppointmentClaimBillingNotes withText(String text) {
        this.text = text;
        return this;
    }
}