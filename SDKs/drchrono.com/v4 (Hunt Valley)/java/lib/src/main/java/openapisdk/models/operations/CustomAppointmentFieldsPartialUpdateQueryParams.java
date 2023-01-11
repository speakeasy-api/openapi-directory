package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomAppointmentFieldsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomAppointmentFieldsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}