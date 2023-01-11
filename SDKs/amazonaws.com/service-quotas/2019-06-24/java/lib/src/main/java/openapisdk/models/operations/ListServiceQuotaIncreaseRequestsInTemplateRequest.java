package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceQuotaIncreaseRequestsInTemplateRequest {
    public ListServiceQuotaIncreaseRequestsInTemplateQueryParams queryParams;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withQueryParams(ListServiceQuotaIncreaseRequestsInTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceQuotaIncreaseRequestsInTemplateHeaders headers;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withHeaders(ListServiceQuotaIncreaseRequestsInTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceQuotaIncreaseRequestsInTemplateRequest request;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withRequest(openapisdk.models.shared.ListServiceQuotaIncreaseRequestsInTemplateRequest request) {
        this.request = request;
        return this;
    }
}