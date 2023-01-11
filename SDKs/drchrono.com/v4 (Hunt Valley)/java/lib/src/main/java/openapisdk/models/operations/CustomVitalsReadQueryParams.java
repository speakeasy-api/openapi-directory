package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomVitalsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomVitalsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}