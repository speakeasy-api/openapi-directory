package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceQuotaRequest {
    public GetServiceQuotaHeaders headers;
    public GetServiceQuotaRequest withHeaders(GetServiceQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceQuotaRequest request;
    public GetServiceQuotaRequest withRequest(openapisdk.models.shared.GetServiceQuotaRequest request) {
        this.request = request;
        return this;
    }
}