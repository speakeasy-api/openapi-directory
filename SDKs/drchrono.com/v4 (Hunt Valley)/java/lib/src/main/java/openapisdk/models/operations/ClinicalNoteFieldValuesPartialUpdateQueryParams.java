package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ClinicalNoteFieldValuesPartialUpdateQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_field")
    public Long clinicalNoteField;
    public ClinicalNoteFieldValuesPartialUpdateQueryParams withClinicalNoteField(Long clinicalNoteField) {
        this.clinicalNoteField = clinicalNoteField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_template")
    public Long clinicalNoteTemplate;
    public ClinicalNoteFieldValuesPartialUpdateQueryParams withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ClinicalNoteFieldValuesPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ClinicalNoteFieldValuesPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}