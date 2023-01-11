package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ReminderProfilesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}