package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingProfilesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public BillingProfilesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}