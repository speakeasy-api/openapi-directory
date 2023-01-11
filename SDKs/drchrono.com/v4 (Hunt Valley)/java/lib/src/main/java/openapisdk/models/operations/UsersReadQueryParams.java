package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public UsersReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}