package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CustomersOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}