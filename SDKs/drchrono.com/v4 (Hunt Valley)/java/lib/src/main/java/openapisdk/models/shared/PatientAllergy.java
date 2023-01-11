package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientAllergy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatientAllergy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public PatientAllergy withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientAllergy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public PatientAllergy withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientAllergy withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reaction")
    public String reaction;
    public PatientAllergy withReaction(String reaction) {
        this.reaction = reaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxnorm")
    public String rxnorm;
    public PatientAllergy withRxnorm(String rxnorm) {
        this.rxnorm = rxnorm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snomed_reaction")
    public PatientAllergySnomedReactionEnum snomedReaction;
    public PatientAllergy withSnomedReaction(PatientAllergySnomedReactionEnum snomedReaction) {
        this.snomedReaction = snomedReaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PatientAllergyStatusEnum status;
    public PatientAllergy withStatus(PatientAllergyStatusEnum status) {
        this.status = status;
        return this;
    }
}