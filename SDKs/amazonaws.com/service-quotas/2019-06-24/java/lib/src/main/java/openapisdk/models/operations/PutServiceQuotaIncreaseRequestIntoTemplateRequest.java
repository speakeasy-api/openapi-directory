package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    public PutServiceQuotaIncreaseRequestIntoTemplateHeaders headers;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withHeaders(PutServiceQuotaIncreaseRequestIntoTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest request;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withRequest(openapisdk.models.shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest request) {
        this.request = request;
        return this;
    }
}