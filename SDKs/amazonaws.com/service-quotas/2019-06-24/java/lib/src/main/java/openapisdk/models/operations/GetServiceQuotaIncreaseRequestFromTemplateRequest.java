package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceQuotaIncreaseRequestFromTemplateRequest {
    public GetServiceQuotaIncreaseRequestFromTemplateHeaders headers;
    public GetServiceQuotaIncreaseRequestFromTemplateRequest withHeaders(GetServiceQuotaIncreaseRequestFromTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceQuotaIncreaseRequestFromTemplateRequest request;
    public GetServiceQuotaIncreaseRequestFromTemplateRequest withRequest(openapisdk.models.shared.GetServiceQuotaIncreaseRequestFromTemplateRequest request) {
        this.request = request;
        return this;
    }
}