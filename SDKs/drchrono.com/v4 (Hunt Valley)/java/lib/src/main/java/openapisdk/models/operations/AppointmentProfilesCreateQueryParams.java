package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentProfilesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}