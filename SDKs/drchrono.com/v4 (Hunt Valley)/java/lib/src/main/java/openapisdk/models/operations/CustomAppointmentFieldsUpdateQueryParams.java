package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomAppointmentFieldsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CustomAppointmentFieldsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}