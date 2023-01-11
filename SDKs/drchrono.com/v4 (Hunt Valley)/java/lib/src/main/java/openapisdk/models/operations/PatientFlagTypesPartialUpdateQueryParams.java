package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientFlagTypesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientFlagTypesPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}