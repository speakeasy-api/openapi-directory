package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public TendersAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}