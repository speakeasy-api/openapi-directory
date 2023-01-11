package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientProblem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_changed")
    public String dateChanged;
    public PatientProblem withDateChanged(String dateChanged) {
        this.dateChanged = dateChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_diagnosis")
    public String dateDiagnosis;
    public PatientProblem withDateDiagnosis(String dateDiagnosis) {
        this.dateDiagnosis = dateDiagnosis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_onset")
    public String dateOnset;
    public PatientProblem withDateOnset(String dateOnset) {
        this.dateOnset = dateOnset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatientProblem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public PatientProblem withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icd_code")
    public String icdCode;
    public PatientProblem withIcdCode(String icdCode) {
        this.icdCode = icdCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icd_version")
    public PatientProblemIcdVersionEnum icdVersion;
    public PatientProblem withIcdVersion(PatientProblemIcdVersionEnum icdVersion) {
        this.icdVersion = icdVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientProblem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info_url")
    public String infoUrl;
    public PatientProblem withInfoUrl(String infoUrl) {
        this.infoUrl = infoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatientProblem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public PatientProblem withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientProblem withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snomed_ct_code")
    public String snomedCtCode;
    public PatientProblem withSnomedCtCode(String snomedCtCode) {
        this.snomedCtCode = snomedCtCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PatientProblemStatusEnum status;
    public PatientProblem withStatus(PatientProblemStatusEnum status) {
        this.status = status;
        return this;
    }
}