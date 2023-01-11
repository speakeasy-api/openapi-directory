package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OrdersOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}