package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientInterventionsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientInterventionsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientInterventionsReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}