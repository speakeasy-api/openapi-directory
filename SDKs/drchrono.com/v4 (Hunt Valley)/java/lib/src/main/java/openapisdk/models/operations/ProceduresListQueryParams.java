package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProceduresListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public ProceduresListQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ProceduresListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ProceduresListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date")
    public String muDate;
    public ProceduresListQueryParams withMuDate(String muDate) {
        this.muDate = muDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date_range")
    public String muDateRange;
    public ProceduresListQueryParams withMuDateRange(String muDateRange) {
        this.muDateRange = muDateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ProceduresListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public ProceduresListQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_date")
    public String serviceDate;
    public ProceduresListQueryParams withServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
        return this;
    }
}