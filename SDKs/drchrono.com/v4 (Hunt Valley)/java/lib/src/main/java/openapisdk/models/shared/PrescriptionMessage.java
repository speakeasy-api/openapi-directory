package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrescriptionMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PrescriptionMessage withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public Long doctor;
    public PrescriptionMessage withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PrescriptionMessage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("json_data")
    public String jsonData;
    public PrescriptionMessage withJsonData(String jsonData) {
        this.jsonData = jsonData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_direction")
    public PrescriptionMessageMessageDirectionEnum messageDirection;
    public PrescriptionMessage withMessageDirection(PrescriptionMessageMessageDirectionEnum messageDirection) {
        this.messageDirection = messageDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_status")
    public String messageStatus;
    public PrescriptionMessage withMessageStatus(String messageStatus) {
        this.messageStatus = messageStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_type")
    public String messageType;
    public PrescriptionMessage withMessageType(String messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_message")
    public String parentMessage;
    public PrescriptionMessage withParentMessage(String parentMessage) {
        this.parentMessage = parentMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public Long patient;
    public PrescriptionMessage withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pharmacy")
    public String pharmacy;
    public PrescriptionMessage withPharmacy(String pharmacy) {
        this.pharmacy = pharmacy;
        return this;
    }
}