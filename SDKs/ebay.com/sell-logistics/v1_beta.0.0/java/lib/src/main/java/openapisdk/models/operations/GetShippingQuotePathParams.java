package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShippingQuotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shippingQuoteId")
    public String shippingQuoteId;
    public GetShippingQuotePathParams withShippingQuoteId(String shippingQuoteId) {
        this.shippingQuoteId = shippingQuoteId;
        return this;
    }
}