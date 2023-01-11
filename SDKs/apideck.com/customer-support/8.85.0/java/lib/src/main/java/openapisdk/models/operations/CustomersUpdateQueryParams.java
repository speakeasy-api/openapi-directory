package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CustomersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}