package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DepartmentsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}