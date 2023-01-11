package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountBalanceRequest {
    public GetAccountBalanceHeaders headers;
    public GetAccountBalanceRequest withHeaders(GetAccountBalanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAccountBalanceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}