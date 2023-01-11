package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderTypesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OrderTypesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}