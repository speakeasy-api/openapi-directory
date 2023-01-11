package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OrdersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}