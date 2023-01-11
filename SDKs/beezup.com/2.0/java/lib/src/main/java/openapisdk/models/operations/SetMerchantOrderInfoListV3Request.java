package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMerchantOrderInfoListV3Request {
    public SetMerchantOrderInfoListV3QueryParams queryParams;
    public SetMerchantOrderInfoListV3Request withQueryParams(SetMerchantOrderInfoListV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetMerchantOrderInfoListRequest request;
    public SetMerchantOrderInfoListV3Request withRequest(openapisdk.models.shared.SetMerchantOrderInfoListRequest request) {
        this.request = request;
        return this;
    }
}