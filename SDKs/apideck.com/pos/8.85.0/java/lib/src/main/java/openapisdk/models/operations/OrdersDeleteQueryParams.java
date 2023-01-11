package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OrdersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}