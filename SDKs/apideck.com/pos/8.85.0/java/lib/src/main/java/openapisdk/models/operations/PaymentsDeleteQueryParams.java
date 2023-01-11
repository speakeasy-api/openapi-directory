package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PaymentsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}