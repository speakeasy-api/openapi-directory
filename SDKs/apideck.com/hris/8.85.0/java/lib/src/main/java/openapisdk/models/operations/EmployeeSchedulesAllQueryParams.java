package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeeSchedulesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeeSchedulesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}