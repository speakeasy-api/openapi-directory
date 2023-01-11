package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientFlagTypesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientFlagTypesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}