package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=hydrate")
    public openapisdk.models.shared.HydrateParamEnum[] hydrate;
    public GetOrderQueryParams withHydrate(openapisdk.models.shared.HydrateParamEnum[] hydrate) {
        this.hydrate = hydrate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=merchantId")
    public Long merchantId;
    public GetOrderQueryParams withMerchantId(Long merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}