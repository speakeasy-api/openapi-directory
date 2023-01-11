package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientMessagePatientMessageAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public String attachment;
    public PatientMessagePatientMessageAttachment withAttachment(String attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientMessagePatientMessageAttachment withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public Long doctor;
    public PatientMessagePatientMessageAttachment withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientMessagePatientMessageAttachment withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}