package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public EmployeesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.EmployeesFilter filter;
    public EmployeesAllQueryParams withFilter(openapisdk.models.shared.EmployeesFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public EmployeesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}