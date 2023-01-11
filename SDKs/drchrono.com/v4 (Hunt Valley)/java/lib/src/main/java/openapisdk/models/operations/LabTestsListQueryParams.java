package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public LabTestsListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabTestsListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public Long order;
    public LabTestsListQueryParams withOrder(Long order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public LabTestsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}