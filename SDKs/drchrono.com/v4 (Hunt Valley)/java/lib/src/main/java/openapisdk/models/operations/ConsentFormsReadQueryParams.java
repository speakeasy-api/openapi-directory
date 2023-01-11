package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ConsentFormsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}