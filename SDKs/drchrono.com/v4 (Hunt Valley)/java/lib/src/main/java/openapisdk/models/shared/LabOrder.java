package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accession_number")
    public String accessionNumber;
    public LabOrder withAccessionNumber(String accessionNumber) {
        this.accessionNumber = accessionNumber;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public LabOrder withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public String[] documents;
    public LabOrder withDocuments(String[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icd10_codes")
    public LabOrderIcd10Code[] icd10Codes;
    public LabOrder withIcd10Codes(LabOrderIcd10Code[] icd10Codes) {
        this.icd10Codes = icd10Codes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LabOrder withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public LabOrder withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public LabOrder withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public LabOrderPriorityEnum priority;
    public LabOrder withPriority(LabOrderPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requisition_id")
    public String requisitionId;
    public LabOrder withRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LabOrder withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("sublab")
    public Long sublab;
    public LabOrder withSublab(Long sublab) {
        this.sublab = sublab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public LabOrder withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}