package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptReservedNodeExchangeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptReservedNodeExchangeActionEnum action;
    public PostAcceptReservedNodeExchangeQueryParams withAction(PostAcceptReservedNodeExchangeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptReservedNodeExchangeVersionEnum version;
    public PostAcceptReservedNodeExchangeQueryParams withVersion(PostAcceptReservedNodeExchangeVersionEnum version) {
        this.version = version;
        return this;
    }
}