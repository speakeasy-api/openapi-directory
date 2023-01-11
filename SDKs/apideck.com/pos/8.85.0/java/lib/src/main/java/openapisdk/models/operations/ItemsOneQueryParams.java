package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ItemsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}