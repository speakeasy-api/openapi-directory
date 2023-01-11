package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearMerchantOrderInfoListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClearMerchantOrderInfoListRequest request;
    public ClearMerchantOrderInfoListRequest withRequest(openapisdk.models.shared.ClearMerchantOrderInfoListRequest request) {
        this.request = request;
        return this;
    }
}