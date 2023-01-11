package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeePayrollsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.PayrollsFilter filter;
    public EmployeePayrollsAllQueryParams withFilter(openapisdk.models.shared.PayrollsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeePayrollsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}