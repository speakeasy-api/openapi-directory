package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsApplyToAppointmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ConsentFormsApplyToAppointmentQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}