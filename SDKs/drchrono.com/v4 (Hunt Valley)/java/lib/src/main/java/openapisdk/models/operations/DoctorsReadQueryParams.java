package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoctorsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public DoctorsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}