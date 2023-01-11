package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public PatientMessagePatientMessageAttachment[] attachments;
    public PatientMessage withAttachments(PatientMessagePatientMessageAttachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PatientMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientMessage withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public PatientMessage withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientMessage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PatientMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientMessage withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("subject")
    public String subject;
    public PatientMessage withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientMessage withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}