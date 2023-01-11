package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayrollsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PayrollsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}