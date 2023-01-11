package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ReminderProfilesDeleteQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}