package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DoctorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public DoctorMessage withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public String attachment;
    public DoctorMessage withAttachment(String attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public DoctorMessage withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DoctorMessage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_notes")
    public DoctorMessageMessageNote[] messageNotes;
    public DoctorMessage withMessageNotes(DoctorMessageMessageNote[] messageNotes) {
        this.messageNotes = messageNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public DoctorMessage withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public Long patient;
    public DoctorMessage withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public DoctorMessage withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_at")
    public String receivedAt;
    public DoctorMessage withReceivedAt(String receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsible_user")
    public String responsibleUser;
    public DoctorMessage withResponsibleUser(String responsibleUser) {
        this.responsibleUser = responsibleUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public DoctorMessage withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public DoctorMessage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DoctorMessageTypeEnum type;
    public DoctorMessage withType(DoctorMessageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public DoctorMessage withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_step")
    public String workflowStep;
    public DoctorMessage withWorkflowStep(String workflowStep) {
        this.workflowStep = workflowStep;
        return this;
    }
}