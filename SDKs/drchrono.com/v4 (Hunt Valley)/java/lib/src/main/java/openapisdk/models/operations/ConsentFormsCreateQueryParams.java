package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ConsentFormsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}