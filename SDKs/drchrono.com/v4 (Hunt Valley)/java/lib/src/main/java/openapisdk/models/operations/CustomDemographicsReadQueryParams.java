package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomDemographicsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomDemographicsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}