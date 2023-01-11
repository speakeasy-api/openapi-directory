package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DepartmentsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}