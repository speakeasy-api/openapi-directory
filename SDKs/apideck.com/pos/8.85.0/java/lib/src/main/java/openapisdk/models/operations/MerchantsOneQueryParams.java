package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MerchantsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}