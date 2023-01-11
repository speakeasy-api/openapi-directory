package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public OfficesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}