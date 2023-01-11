package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientRiskAssessmentsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientRiskAssessmentsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientRiskAssessmentsReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}