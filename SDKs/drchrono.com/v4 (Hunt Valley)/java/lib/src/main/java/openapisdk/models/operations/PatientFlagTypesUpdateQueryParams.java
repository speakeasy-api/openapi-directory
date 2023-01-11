package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientFlagTypesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientFlagTypesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}