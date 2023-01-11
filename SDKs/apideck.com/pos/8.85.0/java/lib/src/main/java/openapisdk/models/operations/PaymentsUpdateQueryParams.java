package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PaymentsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}