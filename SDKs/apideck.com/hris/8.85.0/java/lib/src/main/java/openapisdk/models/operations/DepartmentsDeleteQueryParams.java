package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DepartmentsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}