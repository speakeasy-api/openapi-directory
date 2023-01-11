package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimBillingNotesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ClaimBillingNotesCreateQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ClaimBillingNotesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}