package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabResultsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabResultsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabResultsPartialUpdateQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
}