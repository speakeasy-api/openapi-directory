package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ReminderProfilesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}