package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProceduresReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ProceduresReadQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ProceduresReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date")
    public String muDate;
    public ProceduresReadQueryParams withMuDate(String muDate) {
        this.muDate = muDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date_range")
    public String muDateRange;
    public ProceduresReadQueryParams withMuDateRange(String muDateRange) {
        this.muDateRange = muDateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public ProceduresReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_date")
    public String serviceDate;
    public ProceduresReadQueryParams withServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
        return this;
    }
}