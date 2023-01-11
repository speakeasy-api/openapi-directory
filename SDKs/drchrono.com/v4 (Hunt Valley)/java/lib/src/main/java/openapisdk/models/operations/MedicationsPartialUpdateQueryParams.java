package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MedicationsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public MedicationsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public MedicationsPartialUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}