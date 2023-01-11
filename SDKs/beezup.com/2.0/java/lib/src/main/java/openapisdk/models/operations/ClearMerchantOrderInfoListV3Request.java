package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearMerchantOrderInfoListV3Request {
    public ClearMerchantOrderInfoListV3QueryParams queryParams;
    public ClearMerchantOrderInfoListV3Request withQueryParams(ClearMerchantOrderInfoListV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClearMerchantOrderInfoListRequest request;
    public ClearMerchantOrderInfoListV3Request withRequest(openapisdk.models.shared.ClearMerchantOrderInfoListRequest request) {
        this.request = request;
        return this;
    }
}