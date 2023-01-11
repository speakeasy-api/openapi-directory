package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptReservedInstancesExchangeQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptReservedInstancesExchangeQuoteActionEnum action;
    public PostAcceptReservedInstancesExchangeQuoteQueryParams withAction(PostAcceptReservedInstancesExchangeQuoteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptReservedInstancesExchangeQuoteVersionEnum version;
    public PostAcceptReservedInstancesExchangeQuoteQueryParams withVersion(PostAcceptReservedInstancesExchangeQuoteVersionEnum version) {
        this.version = version;
        return this;
    }
}