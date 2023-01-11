package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ItemsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}