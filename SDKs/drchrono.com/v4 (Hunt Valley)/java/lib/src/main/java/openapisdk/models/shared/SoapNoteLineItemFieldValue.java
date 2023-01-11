package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoapNoteLineItemFieldValue
 * Values entered by doctor when charting a particular appointment
**/
public class SoapNoteLineItemFieldValue {
    @JsonProperty("appointment")
    public Long appointment;
    public SoapNoteLineItemFieldValue withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonProperty("clinical_note_field")
    public Long clinicalNoteField;
    public SoapNoteLineItemFieldValue withClinicalNoteField(Long clinicalNoteField) {
        this.clinicalNoteField = clinicalNoteField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public SoapNoteLineItemFieldValue withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public SoapNoteLineItemFieldValue withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public SoapNoteLineItemFieldValue withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public SoapNoteLineItemFieldValue withValue(String value) {
        this.value = value;
        return this;
    }
}