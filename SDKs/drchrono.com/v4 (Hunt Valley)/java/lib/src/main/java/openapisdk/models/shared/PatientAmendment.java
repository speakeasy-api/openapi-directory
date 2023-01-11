package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientAmendment {
    @JsonProperty("amendment_file")
    public String amendmentFile;
    public PatientAmendment withAmendmentFile(String amendmentFile) {
        this.amendmentFile = amendmentFile;
        return this;
    }
    @JsonProperty("amendment_name")
    public String amendmentName;
    public PatientAmendment withAmendmentName(String amendmentName) {
        this.amendmentName = amendmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public Long appointment;
    public PatientAmendment withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public PatientAmendment withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public PatientAmendment withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientAmendment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientAmendment withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}