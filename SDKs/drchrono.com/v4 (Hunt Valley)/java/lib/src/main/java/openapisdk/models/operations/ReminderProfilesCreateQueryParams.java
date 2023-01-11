package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ReminderProfilesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}