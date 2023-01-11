package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabOrdersPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabOrdersPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public LabOrdersPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}