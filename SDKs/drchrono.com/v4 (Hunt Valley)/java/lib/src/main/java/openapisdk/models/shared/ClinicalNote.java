package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClinicalNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public String appointment;
    public ClinicalNote withAppointment(String appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ClinicalNote withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_sections")
    public ClinicalNoteClinicalNoteSection[] clinicalNoteSections;
    public ClinicalNote withClinicalNoteSections(ClinicalNoteClinicalNoteSection[] clinicalNoteSections) {
        this.clinicalNoteSections = clinicalNoteSections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public ClinicalNote withPatient(String patient) {
        this.patient = patient;
        return this;
    }
}