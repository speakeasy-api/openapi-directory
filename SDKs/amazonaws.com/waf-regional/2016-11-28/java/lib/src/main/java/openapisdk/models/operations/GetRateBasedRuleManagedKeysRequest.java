package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRateBasedRuleManagedKeysRequest {
    public GetRateBasedRuleManagedKeysHeaders headers;
    public GetRateBasedRuleManagedKeysRequest withHeaders(GetRateBasedRuleManagedKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRateBasedRuleManagedKeysRequest request;
    public GetRateBasedRuleManagedKeysRequest withRequest(openapisdk.models.shared.GetRateBasedRuleManagedKeysRequest request) {
        this.request = request;
        return this;
    }
}