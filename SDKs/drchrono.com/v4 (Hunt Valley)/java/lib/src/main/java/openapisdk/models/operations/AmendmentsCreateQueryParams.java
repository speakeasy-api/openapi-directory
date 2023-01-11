package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public AmendmentsCreateQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AmendmentsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public AmendmentsCreateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}