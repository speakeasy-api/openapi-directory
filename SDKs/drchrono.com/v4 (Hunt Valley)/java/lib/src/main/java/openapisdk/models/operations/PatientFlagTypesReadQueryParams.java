package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientFlagTypesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientFlagTypesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}