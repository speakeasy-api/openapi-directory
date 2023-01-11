package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LeadsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}