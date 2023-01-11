package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMerchantOrderInfoRequest {
    public SetMerchantOrderInfoPathParams pathParams;
    public SetMerchantOrderInfoRequest withPathParams(SetMerchantOrderInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetMerchantOrderInfoRequest request;
    public SetMerchantOrderInfoRequest withRequest(openapisdk.models.shared.SetMerchantOrderInfoRequest request) {
        this.request = request;
        return this;
    }
}