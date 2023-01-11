package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProblemsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ProblemsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public ProblemsCreateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}