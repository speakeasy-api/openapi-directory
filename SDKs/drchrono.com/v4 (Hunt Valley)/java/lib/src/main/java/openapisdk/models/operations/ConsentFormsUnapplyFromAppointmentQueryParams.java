package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsUnapplyFromAppointmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ConsentFormsUnapplyFromAppointmentQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}