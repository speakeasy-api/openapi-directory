package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScannedClinicalDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ScannedClinicalDocument withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("date")
    public String date;
    public ScannedClinicalDocument withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ScannedClinicalDocument withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public ScannedClinicalDocument withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonProperty("document")
    public String document;
    public ScannedClinicalDocument withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ScannedClinicalDocument withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metatags")
    public String metatags;
    public ScannedClinicalDocument withMetatags(String metatags) {
        this.metatags = metatags;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public ScannedClinicalDocument withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public ScannedClinicalDocument withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}