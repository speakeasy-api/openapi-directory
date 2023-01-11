package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public LineItemsDeleteQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LineItemsDeleteQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public Long office;
    public LineItemsDeleteQueryParams withOffice(Long office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public LineItemsDeleteQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=posted_date")
    public String postedDate;
    public LineItemsDeleteQueryParams withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_date")
    public String serviceDate;
    public LineItemsDeleteQueryParams withServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public LineItemsDeleteQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}