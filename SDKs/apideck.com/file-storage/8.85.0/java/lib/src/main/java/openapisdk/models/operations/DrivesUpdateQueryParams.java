package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DrivesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}