package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomAppointmentFieldsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomAppointmentFieldsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}