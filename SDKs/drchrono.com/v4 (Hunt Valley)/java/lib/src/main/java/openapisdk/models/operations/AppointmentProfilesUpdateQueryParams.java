package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentProfilesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}