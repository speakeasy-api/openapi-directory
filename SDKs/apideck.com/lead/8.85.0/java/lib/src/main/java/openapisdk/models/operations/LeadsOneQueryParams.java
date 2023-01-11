package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LeadsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}