package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public OfficesPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}