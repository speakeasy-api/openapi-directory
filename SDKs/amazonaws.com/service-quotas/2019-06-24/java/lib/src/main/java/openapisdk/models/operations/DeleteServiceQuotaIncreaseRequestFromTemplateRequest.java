package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    public DeleteServiceQuotaIncreaseRequestFromTemplateHeaders headers;
    public DeleteServiceQuotaIncreaseRequestFromTemplateRequest withHeaders(DeleteServiceQuotaIncreaseRequestFromTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest request;
    public DeleteServiceQuotaIncreaseRequestFromTemplateRequest withRequest(openapisdk.models.shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest request) {
        this.request = request;
        return this;
    }
}