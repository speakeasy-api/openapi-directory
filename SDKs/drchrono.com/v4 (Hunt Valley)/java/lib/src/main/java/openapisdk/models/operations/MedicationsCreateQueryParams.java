package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MedicationsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public MedicationsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public MedicationsCreateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}