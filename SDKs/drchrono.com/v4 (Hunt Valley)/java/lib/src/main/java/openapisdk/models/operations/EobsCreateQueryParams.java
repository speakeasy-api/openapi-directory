package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EobsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public EobsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}