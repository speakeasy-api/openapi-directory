package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public EmployeesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}