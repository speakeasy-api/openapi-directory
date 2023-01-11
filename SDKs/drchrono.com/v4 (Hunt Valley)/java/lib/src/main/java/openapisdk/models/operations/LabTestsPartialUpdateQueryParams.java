package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabTestsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabTestsPartialUpdateQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
}