package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabResultsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabResultsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabResultsReadQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
}