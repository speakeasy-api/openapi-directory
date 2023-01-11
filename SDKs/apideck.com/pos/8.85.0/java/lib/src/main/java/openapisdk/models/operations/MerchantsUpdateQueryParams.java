package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MerchantsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}