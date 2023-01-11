package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public LineItemsReadQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LineItemsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public Long office;
    public LineItemsReadQueryParams withOffice(Long office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public LineItemsReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=posted_date")
    public String postedDate;
    public LineItemsReadQueryParams withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_date")
    public String serviceDate;
    public LineItemsReadQueryParams withServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public LineItemsReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}