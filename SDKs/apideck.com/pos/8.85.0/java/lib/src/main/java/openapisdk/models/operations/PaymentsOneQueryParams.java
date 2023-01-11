package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PaymentsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}