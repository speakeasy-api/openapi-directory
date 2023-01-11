package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DepartmentsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}