package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserGroupsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public UserGroupsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}