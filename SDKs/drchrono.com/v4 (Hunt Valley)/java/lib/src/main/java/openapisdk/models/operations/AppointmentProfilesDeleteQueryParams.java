package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentProfilesDeleteQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}