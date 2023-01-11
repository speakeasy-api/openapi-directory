package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SoapNoteCustomReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public SoapNoteCustomReport withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_fields")
    public SoapNoteCustomReportClinicalNoteField[] clinicalNoteFields;
    public SoapNoteCustomReport withClinicalNoteFields(SoapNoteCustomReportClinicalNoteField[] clinicalNoteFields) {
        this.clinicalNoteFields = clinicalNoteFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public String doctor;
    public SoapNoteCustomReport withDoctor(String doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public SoapNoteCustomReport withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_onpatient")
    public Boolean isOnpatient;
    public SoapNoteCustomReport withIsOnpatient(Boolean isOnpatient) {
        this.isOnpatient = isOnpatient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_persistent")
    public Boolean isPersistent;
    public SoapNoteCustomReport withIsPersistent(Boolean isPersistent) {
        this.isPersistent = isPersistent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SoapNoteCustomReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public SoapNoteCustomReportSoapNoteCustomReport order;
    public SoapNoteCustomReport withOrder(SoapNoteCustomReportSoapNoteCustomReport order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public SoapNoteCustomReport withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}