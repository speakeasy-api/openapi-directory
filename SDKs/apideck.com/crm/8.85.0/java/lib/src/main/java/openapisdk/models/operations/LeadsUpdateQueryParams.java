package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LeadsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}