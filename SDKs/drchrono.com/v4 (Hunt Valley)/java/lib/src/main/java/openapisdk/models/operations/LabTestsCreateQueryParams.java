package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabTestsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabTestsCreateQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
}