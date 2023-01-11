package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ClinicalNoteFieldValuesListQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_field")
    public Long clinicalNoteField;
    public ClinicalNoteFieldValuesListQueryParams withClinicalNoteField(Long clinicalNoteField) {
        this.clinicalNoteField = clinicalNoteField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_template")
    public Long clinicalNoteTemplate;
    public ClinicalNoteFieldValuesListQueryParams withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ClinicalNoteFieldValuesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ClinicalNoteFieldValuesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ClinicalNoteFieldValuesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ClinicalNoteFieldValuesListQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}