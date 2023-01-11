package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomDemographicsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomDemographicsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}