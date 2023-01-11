package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetReservedInstancesExchangeQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetReservedInstancesExchangeQuoteActionEnum action;
    public PostGetReservedInstancesExchangeQuoteQueryParams withAction(PostGetReservedInstancesExchangeQuoteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetReservedInstancesExchangeQuoteVersionEnum version;
    public PostGetReservedInstancesExchangeQuoteQueryParams withVersion(PostGetReservedInstancesExchangeQuoteVersionEnum version) {
        this.version = version;
        return this;
    }
}