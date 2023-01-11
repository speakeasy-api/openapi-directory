package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRequestedServiceQuotaChangeRequest {
    public GetRequestedServiceQuotaChangeHeaders headers;
    public GetRequestedServiceQuotaChangeRequest withHeaders(GetRequestedServiceQuotaChangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRequestedServiceQuotaChangeRequest request;
    public GetRequestedServiceQuotaChangeRequest withRequest(openapisdk.models.shared.GetRequestedServiceQuotaChangeRequest request) {
        this.request = request;
        return this;
    }
}