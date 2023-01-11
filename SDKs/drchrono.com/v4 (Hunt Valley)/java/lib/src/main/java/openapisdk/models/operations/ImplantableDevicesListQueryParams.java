package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImplantableDevicesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ImplantableDevicesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public ImplantableDevicesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date")
    public String muDate;
    public ImplantableDevicesListQueryParams withMuDate(String muDate) {
        this.muDate = muDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mu_date_range")
    public String muDateRange;
    public ImplantableDevicesListQueryParams withMuDateRange(String muDateRange) {
        this.muDateRange = muDateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ImplantableDevicesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public ImplantableDevicesListQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
}