package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExchangeRateRequest {
    public GetExchangeRateHeaders headers;
    public GetExchangeRateRequest withHeaders(GetExchangeRateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetExchangeRateRequest request;
    public GetExchangeRateRequest withRequest(openapisdk.models.shared.GetExchangeRateRequest request) {
        this.request = request;
        return this;
    }
}