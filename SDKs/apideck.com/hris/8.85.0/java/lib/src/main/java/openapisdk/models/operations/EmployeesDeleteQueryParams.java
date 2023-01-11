package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeesDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}