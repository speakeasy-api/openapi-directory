package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public TendersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}