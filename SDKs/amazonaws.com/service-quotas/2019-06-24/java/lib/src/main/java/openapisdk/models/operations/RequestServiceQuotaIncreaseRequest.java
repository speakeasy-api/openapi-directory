package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestServiceQuotaIncreaseRequest {
    public RequestServiceQuotaIncreaseHeaders headers;
    public RequestServiceQuotaIncreaseRequest withHeaders(RequestServiceQuotaIncreaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequestServiceQuotaIncreaseRequest request;
    public RequestServiceQuotaIncreaseRequest withRequest(openapisdk.models.shared.RequestServiceQuotaIncreaseRequest request) {
        this.request = request;
        return this;
    }
}