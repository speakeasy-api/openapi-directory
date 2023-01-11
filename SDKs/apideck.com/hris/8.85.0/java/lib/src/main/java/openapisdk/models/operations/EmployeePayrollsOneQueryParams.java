package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeePayrollsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeePayrollsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}