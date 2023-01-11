package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}