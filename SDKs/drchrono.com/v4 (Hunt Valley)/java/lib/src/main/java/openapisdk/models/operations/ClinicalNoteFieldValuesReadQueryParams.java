package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ClinicalNoteFieldValuesReadQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_field")
    public Long clinicalNoteField;
    public ClinicalNoteFieldValuesReadQueryParams withClinicalNoteField(Long clinicalNoteField) {
        this.clinicalNoteField = clinicalNoteField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_template")
    public Long clinicalNoteTemplate;
    public ClinicalNoteFieldValuesReadQueryParams withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ClinicalNoteFieldValuesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ClinicalNoteFieldValuesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}