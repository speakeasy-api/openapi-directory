package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CustomersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}