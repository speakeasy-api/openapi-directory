package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomAppointmentFieldsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomAppointmentFieldsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}