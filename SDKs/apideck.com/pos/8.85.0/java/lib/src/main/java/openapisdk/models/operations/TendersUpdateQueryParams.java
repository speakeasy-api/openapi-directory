package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public TendersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}