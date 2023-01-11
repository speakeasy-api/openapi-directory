package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderTypesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OrderTypesAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}