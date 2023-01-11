package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabResultsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabResultsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabResultsUpdateQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
}