package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LeadsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}