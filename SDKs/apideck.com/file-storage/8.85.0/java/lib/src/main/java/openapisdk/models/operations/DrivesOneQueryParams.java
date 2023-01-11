package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DrivesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}