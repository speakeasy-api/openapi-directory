package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PaymentsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}