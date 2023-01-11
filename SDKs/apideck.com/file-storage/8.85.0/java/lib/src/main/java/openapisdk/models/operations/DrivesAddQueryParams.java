package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DrivesAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}