package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ItemsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}