package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public OfficesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}