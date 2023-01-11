package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMerchantOrderInfoV3Request {
    public SetMerchantOrderInfoV3PathParams pathParams;
    public SetMerchantOrderInfoV3Request withPathParams(SetMerchantOrderInfoV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetMerchantOrderInfoV3QueryParams queryParams;
    public SetMerchantOrderInfoV3Request withQueryParams(SetMerchantOrderInfoV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetMerchantOrderInfoRequest request;
    public SetMerchantOrderInfoV3Request withRequest(openapisdk.models.shared.SetMerchantOrderInfoRequest request) {
        this.request = request;
        return this;
    }
}