package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReminderProfilesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ReminderProfilesPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}