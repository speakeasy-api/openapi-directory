package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EobsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public EobsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}