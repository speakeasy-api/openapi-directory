package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public AmendmentsUpdateQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AmendmentsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public AmendmentsUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}