package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenBalanceRequest {
    public GetTokenBalanceHeaders headers;
    public GetTokenBalanceRequest withHeaders(GetTokenBalanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTokenBalanceRequest request;
    public GetTokenBalanceRequest withRequest(openapisdk.models.shared.GetTokenBalanceRequest request) {
        this.request = request;
        return this;
    }
}