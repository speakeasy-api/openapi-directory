package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public AppointmentProfilesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentProfilesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public AppointmentProfilesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}