package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldTypesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clinical_note_template")
    public Long clinicalNoteTemplate;
    public ClinicalNoteFieldTypesReadQueryParams withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ClinicalNoteFieldTypesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}