package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMerchantOrderInfoListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetMerchantOrderInfoListRequest request;
    public SetMerchantOrderInfoListRequest withRequest(openapisdk.models.shared.SetMerchantOrderInfoListRequest request) {
        this.request = request;
        return this;
    }
}