package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CustomersAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}